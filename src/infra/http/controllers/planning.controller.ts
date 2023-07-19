import {
  Res,
  Get,
  Body,
  Post,
  Delete,
  Query,
  Patch,
  Param,
  Request,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { Response, response } from 'express';
import { PlanningViewModel } from '../view-models/planning-view-model';
import { CreatePlanningBody } from '../dtos/planning/create-planning-body';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { CreatePlanning } from '@application/use-cases/planning/create-planning';
import { FindPlanningById } from '@application/use-cases/planning/find-a-planning-by-id';
import { PlanningByCategoryViewModel } from '../view-models/planning-by-category-view-model';
import { DeletePlanningById } from '@application/use-cases/planning/delete-a-planning-by-id';

@UseGuards(JwtGuard)
@Controller('plannings')
export class PlanningController {
  constructor(
    private createPlanning: CreatePlanning,
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
