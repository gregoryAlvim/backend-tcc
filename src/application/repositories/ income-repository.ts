import { Income } from '@application/entities/income.entity';

export abstract class IncomeRepository {
  abstract create(user_uuid: string, income: Income): Promise<void>;
  abstract update(income: Income): Promise<void>;
  abstract findIncomeById(income_uuid: string): Promise<Income | null>;
  abstract getIncomesOfMonth(
    user_uuid: string,
    initialDate: Date,
    finalDate: Date,
  ): Promise<Income[]>;
  abstract deleteIncomeById(income_uuid: string): Promise<void>;
}
