import { Objective } from '@application/entities/objective.entity';

export abstract class ObjectiveRepository {
  abstract create(user_uuid: string, objective: Objective): Promise<void>;
  // abstract findPlanningById(planning_uuid: string): Promise<Planning | null>;
  // abstract delete(planning_uuid: string): Promise<void>;
}
