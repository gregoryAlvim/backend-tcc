import { Parcel } from '@application/entities/parcel.entity';

export class ParcelViewModel {
  static toHTTP(parcel: Parcel) {
    return {
      id: parcel.id,
      value: parcel.value,
      month: parcel.month,
      isPaid: parcel.isPaid,
      portion: parcel.portion,
      createdAt: parcel.createdAt,
    };
  }
}
