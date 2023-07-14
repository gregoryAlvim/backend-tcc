import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';
import { Category } from './category.entity';

export interface ExpenseProps {
  date: Date;
  value: number;
  isPay: boolean;
  createdAt: Date;
  category: Category;
  description: string;
}

export class Expense {
  private _id: string;
  private props: ExpenseProps;

  constructor(props: Replace<ExpenseProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set value(value: number) {
    this.props.value = value;
  }

  public get value(): number {
    return this.props.value;
  }

  public set isPay(isPay: boolean) {
    this.props.isPay = isPay;
  }

  public get isPay(): boolean {
    return this.props.isPay;
  }

  public set date(date: Date) {
    this.props.date = date;
  }

  public get date(): Date {
    return this.props.date;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
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
