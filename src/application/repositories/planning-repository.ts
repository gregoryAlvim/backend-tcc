import { Planning } from '@application/entities/planning.entity';

export abstract class PlanningRepository {
  abstract create(user_uuid: string, planning: Planning): Promise<void>;
  abstract findPlanningById(planning_uuid: string): Promise<Planning | null>;
  abstract delete(planning_uuid: string): Promise<void>;
}
