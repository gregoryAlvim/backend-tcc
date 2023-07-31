import { IsNotEmpty } from 'class-validator';

export class CreateObjectiveBody {
  @IsNotEmpty({
    message: 'The date should not be empty.',
  })
  date: string;

  @IsNotEmpty({
    message: 'The goal should not be empty.',
  })
  goal: number;

  @IsNotEmpty({
    message: 'The description should not be empty.',
  })
  description: string;

  @IsNotEmpty({
    message: 'The initialValue should not be empty.',
  })
  initialValue: number;

  @IsNotEmpty({
    message: 'The suggestion should not be empty.',
  })
  suggestion: {
    name: string;
    amountParcels: number;
    valueOfParcels: number;
  };
}
