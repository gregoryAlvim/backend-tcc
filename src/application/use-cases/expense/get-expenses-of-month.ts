import { HttpException, Injectable } from '@nestjs/common';
import { startOfMonth, endOfMonth, parse, getMonth, getYear } from 'date-fns';
import { ExpenseRepository } from '@application/repositories/expense-repository';
import { Expense } from '@application/entities/expense.entity';

interface GetExpensesOfMonthRequest {
  user_uuid: string;
  month: string;
  year: string;
}

interface GetExpensesOfMonthResponse {
  expensesOfMonth: Expense[];
}

@Injectable()
export class GetExpensesOfMonth {
  constructor(private expenseRepository: ExpenseRepository) {}

  async execute({
    user_uuid,
    month,
    year,
  }: GetExpensesOfMonthRequest): Promise<GetExpensesOfMonthResponse> {
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

    const expensesOfMonth = await this.expenseRepository.getExpensesOfMonth(
      user_uuid,
      initialDate,
      finalDate,
    );

    if (expensesOfMonth.length === 0) {
      throw new HttpException(
        'Nenhuma despesa foi encontrada no mês e ano informado!',
        404,
      );
    }

    return { expensesOfMonth };
  }
}
