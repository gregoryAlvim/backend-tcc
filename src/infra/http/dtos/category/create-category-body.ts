import { IsNotEmpty } from 'class-validator';

export class CreateCategoryBody {
  @IsNotEmpty({
    message: 'The user name should not be empty.',
  })
  name: string;

  @IsNotEmpty({
    message: 'The user type should not be empty.',
  })
  type: 'income' | 'expense';
}
