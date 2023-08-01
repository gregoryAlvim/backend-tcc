import { HttpException, Injectable } from '@nestjs/common';
import { Objective } from '@application/entities/objective.entity';
import { ObjectiveRepository } from '@application/repositories/objective-repository';

interface GetAllObjectivesRequest {
  user_uuid: string;
}

interface GetAllObjectivesResponse {
  objectives: Objective[];
}

@Injectable()
export class GetAllObjectives {
  constructor(private objectiveRepository: ObjectiveRepository) {}

  async execute({
    user_uuid,
  }: GetAllObjectivesRequest): Promise<GetAllObjectivesResponse> {
    const objectives = await this.objectiveRepository.getAllObjectives(
      user_uuid,
    );

    if (objectives.length === 0) {
      throw new HttpException('Nenhum objetivo foi encontrado!', 404);
    }

    return { objectives };
  }
}
