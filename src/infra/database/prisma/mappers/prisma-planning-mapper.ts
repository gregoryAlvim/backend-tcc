import { Planning } from '@application/entities/planning.entity';
import { PlanningByCategory } from '@application/entities/planningByCategory.entity';
import { Planning as RawPlanning } from '@prisma/client';

export class PrismaPlanningMapper {
  static toPrisma(planning: Planning) {
    return {
      id: planning.id,
      goal: planning.goal,
      month: planning.month,
      createdAt: planning.createdAt,
    };
  }

  static toDomain(raw: RawPlanning, relationArray: PlanningByCategory[]) {
    return new Planning(
      {
        goal: raw.goal,
        month: raw.month,
        createdAt: raw.createdAt,
        planningsByCategory: relationArray,
      },
      raw.id,
    );
  }
}
