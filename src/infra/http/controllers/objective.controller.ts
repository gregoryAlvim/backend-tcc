import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { SuggestionViewModel } from '../view-models/suggestion-view-model';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { CreateObjectiveBody } from '../dtos/objective/create-objective-body';
import { CreateObjective } from '@application/use-cases/objective/create-objective';
import { CreateSmartBookingSuggestionBody } from '../dtos/objective/create-smart-booking-suggestion-body';
import { GetSmartBookingSuggestion } from '@application/use-cases/objective/get-smart-booking-suggestion';

@UseGuards(JwtGuard)
@Controller('objectives')
export class ObjectiveController {
  constructor(
    private getSmartBookingSuggestion: GetSmartBookingSuggestion,
    private createObjective: CreateObjective,
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
}
