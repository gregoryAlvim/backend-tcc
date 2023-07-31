import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';

export interface SuggestionProps {
  name: 'Curto' | 'Medio' | 'Longo';
  amountParcels: number;
  valueOfParcels: number;
}

export class Suggestion {
  private _id: string;
  private props: SuggestionProps;

  constructor(
    props: Replace<SuggestionProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id(): string {
    return this._id;
  }

  public set name(name: 'Curto' | 'Medio' | 'Longo') {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set amountParcels(amountParcels: number) {
    this.props.amountParcels = amountParcels;
  }

  public get amountParcels(): number {
    return this.props.amountParcels;
  }

  public set valueOfParcels(valueOfParcels: number) {
    this.props.valueOfParcels = valueOfParcels;
  }

  public get valueOfParcels(): number {
    return this.props.valueOfParcels;
  }
}
