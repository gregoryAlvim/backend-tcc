import {
  Res,
  Get,
  Body,
  Post,
  Query,
  Param,
  Patch,
  Request,
  UseGuards,
  Controller,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateExpenseBody } from '../dtos/expense/create-expense-body';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { CreateExpense } from '@application/use-cases/expense/create-expense';
import { FindExpenseById } from '@application/use-cases/expense/find-expense-by-id';
import { UpdateExpenseById } from '@application/use-cases/expense/update-expense-by-id';
import { GetExpensesOfMonth } from '@application/use-cases/expense/get-expenses-of-month';
import { UpdateExpenseBody } from '../dtos/expense/update-expense-body';
import { ExpenseViewModel } from '../view-models/expense-view-model';
import { DeleteExpenseById } from '@application/use-cases/expense/delete-expense-by-id';

@UseGuards(JwtGuard)
@Controller('expenses')
export class ExpenseController {
  constructor(
    private createExpense: CreateExpense,
    private findExpenseById: FindExpenseById,
    private updateExpenseById: UpdateExpenseById,
    private getExpensesOfMonth: GetExpensesOfMonth,
    private deleteExpenseById: DeleteExpenseById,
  ) {}

  @Post('create-expense')
  async create(
    @Body() bodyRequest: CreateExpenseBody,
    @Request() req,
    @Res()
    response: Response,
  ) {
    const { user_uuid } = req.user;

    await this.createExpense.execute({ user_uuid, ...bodyRequest });

    response.json({ status: 201, message: 'Despesa cadastrada com sucesso!' });
  }

  @Patch('update-expense-by/:id')
  async update(
    @Param() param,
    @Body() bodyRequest: UpdateExpenseBody,
    @Res()
    response: Response,
  ) {
    const expense_uuid = param.id;

    await this.updateExpenseById.execute({ expense_uuid, ...bodyRequest });

    response.json({
      status: 201,
      message: 'Despesa atualizada com sucesso!',
    });
  }

  @Get('find-expense-by/:id')
  async findById(@Param() param) {
    const expense_uuid = param.id;

    const { expense } = await this.findExpenseById.execute({ expense_uuid });

    return ExpenseViewModel.toHTTP(expense);
  }

  @Get('get-all')
  async returnAllExpensesByMonth(
    @Request() req,
    @Query('month') month: string,
    @Query('year') year: string,
  ) {
    const { user_uuid } = req.user;

    const { expensesOfMonth } = await this.getExpensesOfMonth.execute({
      user_uuid,
      month,
      year,
    });

    const expensesOfMonthHTTP = expensesOfMonth.map((expense) =>
      ExpenseViewModel.toHTTP(expense),
    );

    return expensesOfMonthHTTP;
  }

  @Delete('delete-expense-by/:id')
  async delete(
    @Param() param,
    @Res()
    response: Response,
  ) {
    const expense_uuid = param.id;

    await this.deleteExpenseById.execute({ expense_uuid });

    response.json({
      status: 204,
      message: 'Despesa deletada com sucesso!',
    });
  }
}
