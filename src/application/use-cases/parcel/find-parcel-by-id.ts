import { HttpException, Injectable } from '@nestjs/common';
import { Parcel } from '@application/entities/parcel.entity';
import { ParcelRepository } from '@application/repositories/parcel-repository';

interface FindParcelByIdRequest {
  parcel_uuid: string;
}

interface FindParcelByIdResponse {
  parcel: Parcel;
}

@Injectable()
export class FindParcelById {
  constructor(private parcelRepository: ParcelRepository) {}

  async execute({
    parcel_uuid,
  }: FindParcelByIdRequest): Promise<FindParcelByIdResponse> {
    const parcel = await this.parcelRepository.findParcelById(parcel_uuid);

    if (!parcel) {
      throw new HttpException('A parcela não foi encontrada!', 404);
    }

    return { parcel };
  }
}
