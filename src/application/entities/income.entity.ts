import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';
import { Category } from './category.entity';

export interface IncomeProps {
  date: Date;
  value: number;
  createdAt: Date;
  category: Category;
  isReceived: boolean;
  description: string;
}

export class Income {
  private _id: string;
  private props: IncomeProps;

  constructor(props: Replace<IncomeProps, { createdAt?: Date }>, id?: string) {
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

  public set isReceived(isReceived: boolean) {
    this.props.isReceived = isReceived;
  }

  public get isReceived(): boolean {
    return this.props.isReceived;
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
