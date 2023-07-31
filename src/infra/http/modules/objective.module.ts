import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/prisma/database.module';
import { ObjectiveController } from '../controllers/objective.controller';
import { GetSmartBookingSuggestion } from '@application/use-cases/objective/get-smart-booking-suggestion';
import { CreateObjective } from '@application/use-cases/objective/create-objective';

@Module({
  imports: [DatabaseModule],
  controllers: [ObjectiveController],
  providers: [GetSmartBookingSuggestion, CreateObjective],
})
export class ObjectiveModule {}
