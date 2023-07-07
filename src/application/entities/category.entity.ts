import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';

export interface CategoryProps {
  createdAt: Date;
  name: string;
  type: string;
}

export class Category {
  private _id: string;
  private props: CategoryProps;

  constructor(
    props: Replace<CategoryProps, { createdAt?: Date }>,
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

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set type(type: string) {
    this.props.type = type;
  }

  public get type(): string {
    return this.props.type;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
