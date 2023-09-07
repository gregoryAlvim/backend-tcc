import { HttpException, Injectable } from '@nestjs/common';
import { ParcelRepository } from '@application/repositories/parcel-repository';
import { Parcel } from '@application/entities/parcel.entity';

interface UpdateParcelByIdRequest {
  parcel_uuid: string;
  value: number;
  month: string;
  portion: number;
  isPaid: boolean;
}

@Injectable()
export class UpdateParcelById {
  constructor(private parcelRepository: ParcelRepository) {}

  async execute({
    value,
    month,
    isPaid,
    portion,
    parcel_uuid,
  }: UpdateParcelByIdRequest) {
    const currentParcel = await this.parcelRepository.findParcelById(
      parcel_uuid,
    );

    if (!currentParcel) {
      throw new HttpException('A parcela não foi encontrada!', 404);
    }

    const parcel = new Parcel(
      {
        createdAt: currentParcel.createdAt,
        value: value ?? currentParcel.value,
        isPaid: isPaid ?? currentParcel.isPaid,
        month: month ?? currentParcel.month,
        portion: portion ?? currentParcel.portion,
      },
      currentParcel.id,
    );

    await this.parcelRepository.update(parcel);
  }
}
