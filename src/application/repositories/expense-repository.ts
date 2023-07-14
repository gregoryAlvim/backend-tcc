import { Expense } from '@application/entities/expense.entity';

export abstract class ExpenseRepository {
  abstract create(user_uuid: string, expense: Expense): Promise<void>;
  abstract update(expense: Expense): Promise<void>;
  abstract findExpenseById(expense_uuid: string): Promise<Expense | null>;
  abstract getExpensesOfMonth(
    user_uuid: string,
    initialDate: Date,
    finalDate: Date,
  ): Promise<Expense[]>;
}
