import { Injectable } from '@nestjs/common';
import { Income } from '@application/entities/income.entity';
import { PrismaService } from '@infra/database/prisma.service';
import { PrismaIncomeMapper } from '../mappers/prisma-income-mapper';
import { IncomeRepository } from '@application/repositories/ income-repository';

@Injectable()
export class PrismaIncomeRepository implements IncomeRepository {
  constructor(private prisma: PrismaService) {}

  async create(user_uuid: string, income: Income): Promise<void> {
    const rawIncome = PrismaIncomeMapper.toPrisma(income);

    await this.prisma.income.create({
      data: { ...rawIncome, userId: user_uuid },
    });
  }

  async update(income: Income): Promise<void> {
    const rawIncome = PrismaIncomeMapper.toPrisma(income);

    await this.prisma.income.update({
      where: {
        id: rawIncome.id,
      },
      data: rawIncome,
    });
  }

  async findIncomeById(income_uuid: string): Promise<Income | null> {
    const income = await this.prisma.income.findUnique({
      where: {
        id: income_uuid,
      },
      include: { category: true },
    });

    if (!income) {
      return null;
    }

    return PrismaIncomeMapper.toDomain(income, income.category);
  }

  async getIncomesOfMonth(
    user_uuid: string,
    initialDate: Date,
    finalDate: Date,
  ): Promise<Income[]> {
    const incomes = await this.prisma.income.findMany({
      where: {
        userId: user_uuid,
        date: {
          lte: finalDate,
          gte: initialDate,
        },
      },
      include: { category: true },
      orderBy: {
        date: 'desc',
      },
    });

    const adjustedIncomes = incomes.map((income) =>
      PrismaIncomeMapper.toDomain(income, income.category),
    );

    return adjustedIncomes;
  }

  async deleteIncomeById(income_uuid: string): Promise<void> {
    await this.prisma.income.delete({
      where: {
        id: income_uuid,
      },
    });
  }
}
