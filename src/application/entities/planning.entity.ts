import { PlanningByCategoryProps } from './planningByCategory.entity';

export interface PlanningProps {
  id: string;
  createdAt: Date;
  month: string;
  goal: number;
  planningByCategory: PlanningByCategoryProps[];
}
