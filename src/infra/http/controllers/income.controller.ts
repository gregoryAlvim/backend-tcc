import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { IncomeViewModel } from '../view-models/income-view-model';
import { CreateIncomeBody } from '../dtos/income/create-income-body';
import { UpdateIncomeBody } from '../dtos/income/update-income-body';
import { CreateIncome } from '@application/use-cases/income/create-income';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { FindIncomeById } from '@application/use-cases/income/find-income-by-id';
import { UpdateIncomeById } from '@application/use-cases/income/update-income-by-id';
import { GetIncomesOfMonth } from '@application/use-cases/income/get-incomes-of-month';
import { DeleteIncomeById } from '@application/use-cases/income/delete-income-by-id';

@UseGuards(JwtGuard)
@Controller('incomes')
export class IncomeController {
  constructor(
    private createIncome: CreateIncome,
    private findIncomeById: FindIncomeById,
    private updateIncomeById: UpdateIncomeById,
    private getIncomesOfMonth: GetIncomesOfMonth,
    private deleteIncomeById: DeleteIncomeById,
  ) {}

  @Post('create-income')
  async create(
    @Body() bodyRequest: CreateIncomeBody,
    @Request() req,
    @Res()
    response: Response,
  ) {
    const { user_uuid } = req.user;

    await this.createIncome.execute({ user_uuid, ...bodyRequest });

    response.json({ status: 201, message: 'Receita cadastrada com sucesso!' });
  }

  @Patch('update-income-by/:id')
  async update(
    @Param() param,
    @Body() bodyRequest: UpdateIncomeBody,
    @Res()
    response: Response,
  ) {
    const income_uuid = param.id;

    await this.updateIncomeById.execute({ income_uuid, ...bodyRequest });

    response.json({
      status: 201,
      message: 'Receita atualizada com sucesso!',
    });
  }

  @Get('find-income-by/:id')
  async findById(@Param() param) {
    const income_uuid = param.id;

    const { income } = await this.findIncomeById.execute({ income_uuid });

    return IncomeViewModel.toHTTP(income);
  }

  @Get('get-all')
  async returnAllIncomesByMonth(
    @Request() req,
    @Query('month') month: string,
    @Query('year') year: string,
  ) {
    const { user_uuid } = req.user;

    const { incomesOfMonth } = await this.getIncomesOfMonth.execute({
      user_uuid,
      month,
      year,
    });

    const incomesOfMonthHTTP = incomesOfMonth.map((income) =>
      IncomeViewModel.toHTTP(income),
    );

    return incomesOfMonthHTTP;
  }

  @Delete('delete-income-by/:id')
  async delete(
    @Param() param,
    @Res()
    response: Response,
  ) {
    const income_uuid = param.id;

    await this.deleteIncomeById.execute({ income_uuid });

    response.json({
      status: 204,
      message: 'Receita deletada com sucesso!',
    });
  }
}
