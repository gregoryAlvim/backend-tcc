import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserBody } from '../dtos/user/create-user-body';
import { UpdateUserBody } from '../dtos/user/update-user-body';
import { CreateUser } from 'src/application/use-cases/user/create-user';
import { FindUserById } from '@application/use-cases/user/find-user-by-id';
import { UserViewModel } from '../view-models/user-view-model';
import { Response } from 'express';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';

@Controller('users/')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private findUserById: FindUserById,
  ) {}

  @Post('create-user')
  async create(
    @Body() bodyRequest: CreateUserBody,
    @Res()
    response: Response,
  ): Promise<any> {
    await this.createUser.execute({ ...bodyRequest });
    response.json({ status: 201, message: 'Usuário criado com sucesso!' });
  }

  @UseGuards(JwtGuard)
  @Get('find-user-by/:id')
  async findById(@Param('id') userId: string) {
    const { user } = await this.findUserById.execute({ userId });

    return UserViewModel.toHTTP(user);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserBody: UpdateUserBody) {
  //   return 'update';
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return 'delete';
  // }
}
