import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma.service';
import { Objective } from '@application/entities/objective.entity';
import { PrismaParcelMapper } from '../mappers/prisma-parcel-mapper';
import { PrismaObjectiveMapper } from '../mappers/prisma-objective-mapper';
import { ObjectiveRepository } from '@application/repositories/objective-repository';

@Injectable()
export class PrismaObjectiveRepository implements ObjectiveRepository {
  constructor(private prisma: PrismaService) {}

  async create(user_uuid: string, objective: Objective): Promise<void> {
    const rawObjective = PrismaObjectiveMapper.toPrisma(objective);

    const rawParcels = objective.parcels.map((parcel) =>
      PrismaParcelMapper.toPrisma(parcel),
    );

    await this.prisma.objective.create({
      data: {
        ...rawObjective,
        userId: user_uuid,
        Parcel: {
          createMany: {
            data: rawParcels,
          },
        },
      },
    });
  }
}
