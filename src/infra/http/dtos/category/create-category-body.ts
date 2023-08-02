import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateCategoryBody {
  @IsNotEmpty({
    message: 'The user name should not be empty.',
  })
  name: string;

  @IsNotEmpty({
    message: 'The user type should not be empty.',
  })
  @IsIn(['income', 'expense'], {
    message: `O tipo deve ser "income" ou "expense"`,
  })
  type: 'income' | 'expense';
}
