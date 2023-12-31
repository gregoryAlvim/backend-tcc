import {
  Res,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Request,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { Response } from 'express';
import { PlanningViewModel } from '../view-models/planning-view-model';
import { CreatePlanningBody } from '../dtos/planning/create-planning-body';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { CreatePlanning } from '@application/use-cases/planning/create-planning';
import { GetAllPlannings } from '@application/use-cases/planning/get-all-plannings';
import { FindPlanningById } from '@application/use-cases/planning/find-a-planning-by-id';
import { DeletePlanningById } from '@application/use-cases/planning/delete-a-planning-by-id';

@UseGuards(JwtGuard)
@Controller('plannings')
export class PlanningController {
  constructor(
    private createPlanning: CreatePlanning,
    private getAllPlannings: GetAllPlannings,
    private findPlanningById: FindPlanningById,
    private deletePlanningById: DeletePlanningById,
  ) {}

  @Post('create-planning')
  async create(
    @Body() bodyRequest: CreatePlanningBody,
    @Request() req,
    @Res()
    response: Response,
  ) {
    const { user_uuid } = req.user;

    await this.createPlanning.execute({ user_uuid, ...bodyRequest });

    response.json({
      status: 201,
      message: 'Planejamento cadastrado com sucesso!',
    });
  }

  @Get('get-all')
  async returnAllPlannings(@Request() req) {
    const { user_uuid } = req.user;

    const { plannings } = await this.getAllPlannings.execute({
      user_uuid,
    });

    const planningsHttp = plannings.map((planning) =>
      PlanningViewModel.toHTTP(planning),
    );

    return planningsHttp;
  }

  @Get('find-planning-by/:id')
  async findById(@Param() param) {
    const planning_uuid = param.id;

    const { planning } = await this.findPlanningById.execute({ planning_uuid });

    const planningHttp = PlanningViewModel.toHTTP(planning);

    return planningHttp;
  }

  @Delete('delete-planning-by/:id')
  async delete(
    @Param() param,
    @Res()
    response: Response,
  ) {
    const planning_uuid = param.id;

    await this.deletePlanningById.execute({ planning_uuid });

    response.json({
      status: 204,
      message: 'Planejamento deletado com sucesso!',
    });
  }
}
