import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';

export interface ParcelProps {
  createdAt: Date;
  portion: number;
  value: number;
  month: string;
}

export class Parcel {
  private _id: string;
  private props: ParcelProps;

  constructor(props: Replace<ParcelProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set portion(portion: number) {
    this.props.portion = portion;
  }

  public get portion(): number {
    return this.props.portion;
  }

  public set value(value: number) {
    this.props.value = value;
  }

  public get value(): number {
    return this.props.value;
  }

  public set month(month: string) {
    this.props.month = month;
  }

  public get month(): string {
    return this.props.month;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
