import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/prisma/database.module';
import { ObjectiveController } from '../controllers/objective.controller';
import { CreateObjective } from '@application/use-cases/objective/create-objective';
import { GetAllObjectives } from '@application/use-cases/objective/get-all-objectives';
import { FindObjectiveById } from '@application/use-cases/objective/find-an-objective-by-id';
import { DeleteObjectiveById } from '@application/use-cases/objective/delete-an-objective-by-id';
import { GetSmartBookingSuggestion } from '@application/use-cases/objective/get-smart-booking-suggestion';

@Module({
  imports: [DatabaseModule],
  controllers: [ObjectiveController],
  providers: [
    CreateObjective,
    GetAllObjectives,
    FindObjectiveById,
    DeleteObjectiveById,
    GetSmartBookingSuggestion,
  ],
})
export class ObjectiveModule {}
