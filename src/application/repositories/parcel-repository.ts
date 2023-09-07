import { Parcel } from '@application/entities/parcel.entity';

export abstract class ParcelRepository {
  abstract update(parcel: Parcel): Promise<void>;
  abstract findParcelById(parcel_uuid: string): Promise<Parcel | null>;
}
