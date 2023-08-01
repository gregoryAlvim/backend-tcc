import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ObjectiveViewModel } from '../view-models/objective-view-model';
import { SuggestionViewModel } from '../view-models/suggestion-view-model';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { CreateObjectiveBody } from '../dtos/objective/create-objective-body';
import { CreateObjective } from '@application/use-cases/objective/create-objective';
import { FindObjectiveById } from '@application/use-cases/objective/find-an-objective-by-id';
import { DeleteObjectiveById } from '@application/use-cases/objective/delete-an-objective-by-id';
import { CreateSmartBookingSuggestionBody } from '../dtos/objective/create-smart-booking-suggestion-body';
import { GetSmartBookingSuggestion } from '@application/use-cases/objective/get-smart-booking-suggestion';
import { GetAllObjectives } from '@application/use-cases/objective/get-all-objectives';

@UseGuards(JwtGuard)
@Controller('objectives')
export class ObjectiveController {
  constructor(
    private createObjective: CreateObjective,
    private getAllObjectives: GetAllObjectives,
    private findObjectiveById: FindObjectiveById,
    private deleteObjectiveById: DeleteObjectiveById,
    private getSmartBookingSuggestion: GetSmartBookingSuggestion,
  ) {}

  @Post('create-objective')
  async create(
    @Body() bodyRequest: CreateObjectiveBody,
    @Request() req,
    @Res()
    response: Response,
  ): Promise<void> {
    const { user_uuid } = req.user;

    await this.createObjective.execute({ user_uuid, ...bodyRequest });

    response.json({
      status: 201,
      message: 'Objetivo criado com sucesso!',
    });
  }

  @Post('build-suggestions')
  async build(
    @Body() bodyRequest: CreateSmartBookingSuggestionBody,
    @Res()
    response: Response,
  ): Promise<any> {
    const suggestions = await this.getSmartBookingSuggestion.execute({
      ...bodyRequest,
    });

    const suggestionsHttp = suggestions.map((suggestion) =>
      SuggestionViewModel.toHTTP(suggestion),
    );

    response.json({
      status: 201,
      message: 'Sugestões criadas com sucesso!',
      data: suggestionsHttp,
    });
  }

  @Get('find-objective-by/:id')
  async findById(@Param() param) {
    const objective_uuid = param.id;

    const objective = await this.findObjectiveById.execute({ objective_uuid });

    return ObjectiveViewModel.toHTTP(objective);
  }

  @Get('get-all')
  async returnAllObjectives(@Request() req) {
    const { user_uuid } = req.user;

    const { objectives } = await this.getAllObjectives.execute({
      user_uuid,
    });

    const objectivesHttp = objectives.map((objective) =>
      ObjectiveViewModel.toHTTP(objective),
    );

    return objectivesHttp;
  }

  @Delete('delete-objective-by/:id')
  async delete(
    @Param() param,
    @Res()
    response: Response,
  ) {
    const objective_uuid = param.id;

    await this.deleteObjectiveById.execute({ objective_uuid });

    response.json({
      status: 204,
      message: 'Objetivo deletado com sucesso!',
    });
  }
}
