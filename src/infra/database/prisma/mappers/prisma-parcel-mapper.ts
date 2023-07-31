import { Parcel as RawParcel } from '@prisma/client';
import { Parcel } from '@application/entities/parcel.entity';

export class PrismaParcelMapper {
  static toPrisma(parcel: Parcel) {
    return {
      id: parcel.id,
      value: parcel.value,
      month: parcel.month,
      portion: parcel.portion,
      createdAt: parcel.createdAt,
    };
  }

  static toDomain(raw: RawParcel) {
    return new Parcel(
      {
        value: raw.value,
        month: raw.month,
        portion: raw.portion,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
