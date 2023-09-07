import { ParcelViewModel } from './parcel-view-model';
import { Objective } from '@application/entities/objective.entity';

export class ObjectiveViewModel {
  static toHTTP(objective: Objective) {
    return {
      id: objective.id,
      goal: objective.goal,
      date: objective.date,
      createdAt: objective.createdAt,
      isActivated: objective.isActivated,
      description: objective.description,
      initialValue: objective.initialValue,
      parcels: objective.parcels.map((parcel) =>
        ParcelViewModel.toHTTP(parcel),
      ),
    };
  }
}
