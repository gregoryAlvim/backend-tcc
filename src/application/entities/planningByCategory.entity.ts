import { CategoryProps } from './category.entity';

export interface PlanningByCategoryProps {
  id: string;
  createdAt: Date;
  goal: number;
  category: CategoryProps;
}
