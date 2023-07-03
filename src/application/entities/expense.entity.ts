import { CategoryProps } from './category.entity';

export interface ExpenseProps {
  id: string;
  createdAt: Date;
  value: number;
  isPay: boolean;
  date: Date;
  Description: string;
  category: CategoryProps;
}
