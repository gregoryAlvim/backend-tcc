import { ParcelProps } from './parcel.entity';

export interface ObjectiveProps {
  id: string;
  createdAt: Date;
  date: Date;
  goal: number;
  initialValue: number;
  parcels: ParcelProps[];
}

export class Objective {}
