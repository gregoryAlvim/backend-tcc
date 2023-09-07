import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/prisma/database.module';
import { PlanningController } from '../controllers/planning.controller';
import { CreatePlanning } from '@application/use-cases/planning/create-planning';
import { GetAllPlannings } from '@application/use-cases/planning/get-all-plannings';
import { FindPlanningById } from '@application/use-cases/planning/find-a-planning-by-id';
import { DeletePlanningById } from '@application/use-cases/planning/delete-a-planning-by-id';

@Module({
  imports: [DatabaseModule],
  controllers: [PlanningController],
  providers: [
    CreatePlanning,
    GetAllPlannings,
    FindPlanningById,
    DeletePlanningById,
  ],
})
export class PlanningModule {}
