import { ObjectiveRepository } from '@application/repositories/objective-repository';
import { HttpException, Injectable } from '@nestjs/common';

interface DeleteObjectiveByIdRequest {
  objective_uuid: string;
}

@Injectable()
export class DeleteObjectiveById {
  constructor(private objectiveRepository: ObjectiveRepository) {}

  async execute({ objective_uuid }: DeleteObjectiveByIdRequest) {
    const objective = await this.objectiveRepository.findObjectiveById(
      objective_uuid,
    );

    if (!objective) {
      throw new HttpException(
        'Nenhum objetivo foi encontrado com este uuid!',
        404,
      );
    }

    await this.objectiveRepository.delete(objective_uuid);
  }
}
