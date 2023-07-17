import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/prisma/database.module';
import { PlanningController } from '../controllers/planning.controller';
import { CreatePlanning } from '@application/use-cases/planning/create-planning';

@Module({
  imports: [DatabaseModule],
  controllers: [PlanningController],
  providers: [CreatePlanning],
})
export class PlanningModule {}
