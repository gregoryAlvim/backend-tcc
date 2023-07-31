import { Objective } from '@application/entities/objective.entity';
import { Parcel } from '@application/entities/parcel.entity';
import { ObjectiveRepository } from '@application/repositories/objective-repository';
import { MonthList } from '@helpers/Months';
import { HttpException, Injectable } from '@nestjs/common';
import { parse, addMonths, getMonth } from 'date-fns';

interface CreateObjectiveRequest {
  user_uuid: string;
  date: string;
  goal: number;
  description: string;
  initialValue: number;

  suggestion: {
    name: string;
    amountParcels: number;
    valueOfParcels: number;
  };
}

@Injectable()
export class CreateObjective {
  constructor(private objectiveRepository: ObjectiveRepository) {}

  async execute({
    user_uuid,
    date,
    goal,
    description,
    initialValue,
    suggestion,
  }: CreateObjectiveRequest): Promise<void> {
    const parcels: Parcel[] = [];
    const currentDate = new Date();
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date());

    for (let i = 1; i <= suggestion.amountParcels; i++) {
      const month = getMonth(addMonths(currentDate, i));

      const parcel = new Parcel({
        month: MonthList[month],
        portion: i,
        value: suggestion.valueOfParcels,
      });

      parcels.push(parcel);
    }

    const objective = new Objective({
      date: parsedDate,
      description,
      goal,
      initialValue,
      parcels,
    });

    await this.objectiveRepository.create(user_uuid, objective);
  }
}
