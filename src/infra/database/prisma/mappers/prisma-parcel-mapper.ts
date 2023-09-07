import { Parcel as RawParcel } from '@prisma/client';
import { Parcel } from '@application/entities/parcel.entity';

export class PrismaParcelMapper {
  static toPrisma(parcel: Parcel) {
    return {
      id: parcel.id,
      value: parcel.value,
      month: parcel.month,
      isPaid: parcel.isPaid,
      portion: parcel.portion,
      createdAt: parcel.createdAt,
    };
  }

  static toDomain(raw: RawParcel) {
    return new Parcel(
      {
        value: raw.value,
        month: raw.month,
        isPaid: raw.isPaid,
        portion: raw.portion,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
