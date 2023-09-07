import { HttpException, Injectable } from '@nestjs/common';
import { Planning } from '@application/entities/planning.entity';
import { PlanningRepository } from '@application/repositories/planning-repository';

interface GetAllPlanningsRequest {
  user_uuid: string;
}

interface GetAllPlanningsResponse {
  plannings: Planning[];
}

@Injectable()
export class GetAllPlannings {
  constructor(private planningRepository: PlanningRepository) {}

  async execute({
    user_uuid,
  }: GetAllPlanningsRequest): Promise<GetAllPlanningsResponse> {
    const plannings = await this.planningRepository.getAllPlannings(user_uuid);

    if (plannings.length === 0) {
      throw new HttpException('Nenhum planejamento foi encontrado!', 404);
    }

    return { plannings };
  }
}
