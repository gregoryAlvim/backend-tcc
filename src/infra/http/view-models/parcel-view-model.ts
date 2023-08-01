import { Parcel } from '@application/entities/parcel.entity';

export class ParcelViewModel {
  static toHTTP(parcel: Parcel) {
    return {
      id: parcel.id,
      value: parcel.value,
      month: parcel.month,
      portion: parcel.portion,
      createdAt: parcel.createdAt,
    };
  }
}
