import { Planning } from '@application/entities/planning.entity';

export abstract class PlanningRepository {
  abstract create(user_uuid: string, planning: Planning): Promise<void>;
  // abstract update(expense: Expense): Promise<void>;
  // abstract findExpenseById(expense_uuid: string): Promise<Expense | null>;
  // abstract getExpensesOfMonth(
  //   user_uuid: string,
  //   initialDate: Date,
  //   finalDate: Date,
  // ): Promise<Expense[]>;
}
