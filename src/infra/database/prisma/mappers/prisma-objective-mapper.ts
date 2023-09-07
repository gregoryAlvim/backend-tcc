import { Objective as RawObjective } from '@prisma/client';
import { Parcel } from '@application/entities/parcel.entity';
import { Objective } from '@application/entities/objective.entity';

export class PrismaObjectiveMapper {
  static toPrisma(objective: Objective) {
    return {
      id: objective.id,
      goal: objective.goal,
      date: objective.date,
      createdAt: objective.createdAt,
      description: objective.description,
      isActivated: objective.isActivated,
      initialValue: objective.initialValue,
    };
  }

  static toDomain(raw: RawObjective, relationArray: Parcel[]) {
    return new Objective(
      {
        date: raw.date,
        goal: raw.goal,
        createdAt: raw.createdAt,
        description: raw.description,
        isActivated: raw.isActivated,
        initialValue: raw.initialValue,
        parcels: relationArray,
      },
      raw.id,
    );
  }
}
