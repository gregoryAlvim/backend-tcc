import { HttpException, Injectable } from '@nestjs/common';
import { Income } from '@application/entities/income.entity';
import { startOfMonth, endOfMonth, parse, getMonth, getYear } from 'date-fns';
import { IncomeRepository } from '@application/repositories/ income-repository';

interface GetIncomesOfMonthRequest {
  user_uuid: string;
  month: string;
  year: string;
}

interface GetIncomesOfMonthResponse {
  incomesOfMonth: Income[];
}

@Injectable()
export class GetIncomesOfMonth {
  constructor(private incomeRepository: IncomeRepository) {}

  async execute({
    user_uuid,
    month,
    year,
  }: GetIncomesOfMonthRequest): Promise<GetIncomesOfMonthResponse> {
    if (!month && !year) {
      const currentDate = new Date();

      const currentYear = getYear(currentDate);
      const currentMonth = getMonth(currentDate) + 1;

      month = currentMonth.toString();
      year = currentYear.toString();
    }

    const initialDate = startOfMonth(
      parse(`${year}-${month}`, 'yyyy-MM', new Date()),
    );

    const finalDate = endOfMonth(
      parse(`${year}-${month}`, 'yyyy-MM', new Date()),
    );

    const incomesOfMonth = await this.incomeRepository.getIncomesOfMonth(
      user_uuid,
      initialDate,
      finalDate,
    );

    if (incomesOfMonth.length === 0) {
      throw new HttpException(
        'Nenhuma receita foi encontrada no mês e ano informado!',
        404,
      );
    }

    return { incomesOfMonth };
  }
}
