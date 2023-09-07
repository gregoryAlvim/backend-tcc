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

  async findObjectiveById(objective_uuid: string): Promise<Objective | null> {
    const objective = await this.prisma.objective.findUnique({
      where: {
        id: objective_uuid,
      },
      include: {
        Parcel: true,
      },
    });

    const parcels = objective.Parcel.map((parcel) =>
      PrismaParcelMapper.toDomain(parcel),
    );

    return PrismaObjectiveMapper.toDomain(objective, parcels);
  }

  async getAllObjectives(user_uuid: string): Promise<Objective[]> {
    const objectives = await this.prisma.objective.findMany({
      where: {
        userId: user_uuid,
        isActivated: true,
      },
      include: {
        Parcel: {
          orderBy: {
            portion: 'asc',
          },
        },
      },
    });

    const adjustedObjectives = objectives.map((objective) => {
      const adjustedParcels = objective.Parcel.map((parcel) =>
        PrismaParcelMapper.toDomain(parcel),
      );

      return PrismaObjectiveMapper.toDomain(objective, adjustedParcels);
    });

    return adjustedObjectives;
  }

  async delete(objective_uuid: string): Promise<void> {
    await this.prisma.objective.delete({
      where: {
        id: objective_uuid,
      },
    });
  }
}
