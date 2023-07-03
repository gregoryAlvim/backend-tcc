import { CategoryProps } from './category.entity';

export interface IncomeProps {
  id: string;
  createdAt: Date;
  value: number;
  isReceived: boolean;
  date: Date;
  Description: string;
  category: CategoryProps;
}
