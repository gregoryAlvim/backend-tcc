import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';
import { Category } from './category.entity';

export interface PlanningByCategoryProps {
  createdAt: Date;
  goal: number;
  category: Category;
}

export class PlanningByCategory {
  private _id: string;
  private props: PlanningByCategoryProps;

  constructor(
    props: Replace<PlanningByCategoryProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set goal(goal: number) {
    this.props.goal = goal;
  }

  public get goal(): number {
    return this.props.goal;
  }

  public set category(category: Category) {
    this.props.category = category;
  }

  public get category(): Category {
    return this.props.category;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
