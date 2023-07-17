import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlanningBody {
  @IsNotEmpty({
    message: 'The month should not be empty.',
  })
  month: string;

  @IsNumber()
  @IsNotEmpty({
    message: 'The goal should not be empty.',
  })
  goal: number;

  @IsNotEmpty({
    message: 'The plannings by category should not be empty.',
  })
  planningsByCategory: [
    {
      goal: number;
      category_uuid: string;
    },
  ];
}
