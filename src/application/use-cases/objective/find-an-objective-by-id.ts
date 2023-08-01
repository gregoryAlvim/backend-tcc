import { ObjectiveRepository } from '@application/repositories/objective-repository';
import { HttpException, Injectable } from '@nestjs/common';

interface FindObjectiveByIdRequest {
  objective_uuid: string;
}
@Injectable()
export class FindObjectiveById {
  constructor(private objectiveRepository: ObjectiveRepository) {}

  async execute({ objective_uuid }: FindObjectiveByIdRequest) {
    const objective = await this.objectiveRepository.findObjectiveById(
      objective_uuid,
    );

    if (!objective) {
      throw new HttpException('O objetivo não foi encontrado!', 404);
    }

    return objective;
  }
}
