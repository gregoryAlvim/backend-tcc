import { randomUUID } from 'crypto';
import { Parcel } from './parcel.entity';
import { Replace } from '@helpers/Replace';

export interface ObjectiveProps {
  createdAt: Date;
  date: Date;
  goal: number;
  description: string;
  initialValue: number;
  parcels: Parcel[];
}

export class Objective {
  private _id: string;
  private props: ObjectiveProps;

  constructor(
    props: Replace<ObjectiveProps, { createdAt?: Date; parcels?: Parcel[] }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      parcels: props.parcels ?? [],
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set date(date: Date) {
    this.props.date = date;
  }

  public get date(): Date {
    return this.props.date;
  }

  public set goal(goal: number) {
    this.props.goal = goal;
  }

  public get goal(): number {
    return this.props.goal;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }

  public set initialValue(initialValue: number) {
    this.props.initialValue = initialValue;
  }

  public get initialValue(): number {
    return this.props.initialValue;
  }

  public set parcels(parcel: Parcel) {
    this.props.parcels.push(parcel);
  }

  public get parcels(): Parcel[] {
    return this.props.parcels;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
