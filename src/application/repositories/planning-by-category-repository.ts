import { PlanningByCategory } from '@application/entities/planningByCategory.entity';

export abstract class PlanningByCategoryRepository {
  abstract update(planningByCategory: PlanningByCategory): Promise<void>;
  abstract findPlanningByCategoryById(
    planningByCategory_uuid: string,
  ): Promise<PlanningByCategory | null>;
  abstract deletePlanningByCategoryById(
    planningByCategory_uuid: string,
  ): Promise<void>;
}
