import { Objective } from '@application/entities/objective.entity';

export abstract class ObjectiveRepository {
  abstract create(user_uuid: string, objective: Objective): Promise<void>;
  abstract findObjectiveById(objective_uuid: string): Promise<Objective | null>;
  abstract delete(objective_uuid: string): Promise<void>;
}
