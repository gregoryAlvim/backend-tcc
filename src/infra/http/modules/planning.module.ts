import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/prisma/database.module';
import { PlanningController } from '../controllers/planning.controller';
import { CreatePlanning } from '@application/use-cases/planning/create-planning';
import { FindPlanningById } from '@application/use-cases/planning/find-a-planning-by-id';
import { DeletePlanningById } from '@application/use-cases/planning/delete-a-planning-by-id';

@Module({
  imports: [DatabaseModule],
  controllers: [PlanningController],
  providers: [CreatePlanning, FindPlanningById, DeletePlanningById],
})
export class PlanningModule {}
