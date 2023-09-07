import { Injectable } from '@nestjs/common';
import { Parcel } from '@application/entities/parcel.entity';
import { PrismaService } from '@infra/database/prisma.service';
import { PrismaParcelMapper } from '../mappers/prisma-parcel-mapper';
import { ParcelRepository } from '@application/repositories/parcel-repository';

@Injectable()
export class PrismaParcelRepository implements ParcelRepository {
  constructor(private prisma: PrismaService) {}

  async update(parcel: Parcel): Promise<void> {
    const rawParcel = PrismaParcelMapper.toPrisma(parcel);

    await this.prisma.parcel.update({
      where: {
        id: rawParcel.id,
      },
      data: rawParcel,
    });
  }

  async findParcelById(parcel_uuid: string): Promise<Parcel | null> {
    const parcel = await this.prisma.parcel.findUnique({
      where: {
        id: parcel_uuid,
      },
    });

    if (!parcel) {
      return null;
    }

    return PrismaParcelMapper.toDomain(parcel);
  }
}
