import { IsNotEmpty } from 'class-validator';

export class CreateSmartBookingSuggestionBody {
  @IsNotEmpty({
    message: 'The date should not be empty.',
  })
  date: string;

  @IsNotEmpty({
    message: 'The goal should not be empty.',
  })
  goal: number;

  @IsNotEmpty({
    message: 'The initialValue should not be empty.',
  })
  initialValue: number;
}
