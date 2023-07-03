import { Replace } from '@helpers/Replace';
import { randomUUID } from 'crypto';

export interface WalletProps {
  createdAt: Date;
  value: number;
}

export class Wallet {
  private _id: string;
  private props: WalletProps;

  constructor(props: Replace<WalletProps, { createdAt?: Date }>, id?: string) {
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

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
