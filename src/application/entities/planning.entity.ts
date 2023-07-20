import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';
import { PlanningByCategory } from './planningByCategory.entity';

export interface PlanningProps {
  createdAt: Date;
  month: string;
  goal: number;
  planningsByCategory: PlanningByCategory[];
}

export class Planning {
  private _id: string;
  private props: PlanningProps;

  constructor(
    props: Replace<
      PlanningProps,
      { createdAt?: Date; planningsByCategory?: PlanningByCategory[] }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      planningsByCategory: props.planningsByCategory ?? [],
    };
  }

  public get id(): string {
    return this._id;
  }

  public set month(month: string) {
    this.props.month = month;
  }

  public get month(): string {
    return this.props.month;
  }

  public set goal(goal: number) {
    this.props.goal = goal;
  }

  public get goal(): number {
    return this.props.goal;
  }

  public set planningsByCategory(planningByCategory: PlanningByCategory) {
    this.props.planningsByCategory.push(planningByCategory);
  }

  public get planningsByCategory(): PlanningByCategory[] {
    return this.props.planningsByCategory;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
