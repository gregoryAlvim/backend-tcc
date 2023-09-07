import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma.service';
import { Planning } from '@application/entities/planning.entity';
import { PrismaPlanningMapper } from '../mappers/prisma-planning-mapper';
import { PlanningRepository } from '@application/repositories/planning-repository';
import { PrismaPlanningByCategoryMapper } from '../mappers/prisma-planning-by-category-mapper';

@Injectable()
export class PrismaPlanningRepository implements PlanningRepository {
  constructor(private prisma: PrismaService) {}

  async create(user_uuid: string, planning: Planning): Promise<void> {
    const rawPlanning = PrismaPlanningMapper.toPrisma(planning);

    const rawPlanningsByCategory = planning.planningsByCategory.map(
      (planningByCategory) =>
        PrismaPlanningByCategoryMapper.toPrisma(planningByCategory),
    );

    await this.prisma.planning.create({
      data: {
        ...rawPlanning,
        userId: user_uuid,
        PlanningByCategory: {
          createMany: {
            data: rawPlanningsByCategory,
          },
        },
      },
    });
  }

  async findPlanningById(planning_uuid: string): Promise<Planning | null> {
    const planning = await this.prisma.planning.findUnique({
      where: {
        id: planning_uuid,
      },
      include: {
        PlanningByCategory: {
          include: {
            category: true,
          },
        },
      },
    });

    if (!planning) {
      return null;
    }

    const planningsByCategory = planning.PlanningByCategory.map(
      (planningByCategory) => {
        return PrismaPlanningByCategoryMapper.toDomain(
          planningByCategory,
          planningByCategory.category,
        );
      },
    );

    return PrismaPlanningMapper.toDomain(planning, planningsByCategory);
  }

  async delete(planning_uuid: string): Promise<void> {
    await this.prisma.planning.delete({
      where: {
        id: planning_uuid,
      },
    });
  }

  async getAllPlannings(user_uuid: string): Promise<Planning[]> {
    const plannings = await this.prisma.planning.findMany({
      where: {
        userId: user_uuid,
      },
      include: {
        PlanningByCategory: {
          include: {
            category: true,
          },
        },
      },
    });

    const adjustedPlannings = plannings.map((planning) => {
      const adjustedPlanningByCategory = planning.PlanningByCategory.map(
        (item) => PrismaPlanningByCategoryMapper.toDomain(item, item.category),
      );

      return PrismaPlanningMapper.toDomain(
        planning,
        adjustedPlanningByCategory,
      );
    });

    return adjustedPlannings;
  }
}
