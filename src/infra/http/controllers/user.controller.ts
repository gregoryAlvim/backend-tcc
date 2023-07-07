import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import { CreateUserBody } from '../dtos/user/create-user-body';
import { UpdateUserBody } from '../dtos/user/update-user-body';
import { CreateUser } from 'src/application/use-cases/user/create-user';
import { FindUserById } from '@application/use-cases/user/find-user-by-id';
import { UserViewModel } from '../view-models/user-view-model';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { UpdateUserById } from '@application/use-cases/user/update-user-by-id';
import { Response } from 'express';

@Controller('users/')
export class UserController {
  constructor(
    private createUser: CreateUser,
    private findUserById: FindUserById,
    private updateUserById: UpdateUserById,
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
  @Get('find-user-by/')
  async findById(@Request() req) {
    const { user_uuid } = req.user;

    const { user } = await this.findUserById.execute({ user_uuid });

    return UserViewModel.toHTTP(user);
  }

  @UseGuards(JwtGuard)
  @Patch('update-user-by/')
  async update(
    @Request() req,
    @Res()
    response: Response,
    @Body() updateUserBody: UpdateUserBody,
  ) {
    const { user_uuid } = req.user;

    await this.updateUserById.execute({
      user_uuid,
      ...updateUserBody,
    });

    response.json({ status: 200, message: 'Usuário atualizado com sucesso!' });
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return 'delete';
  // }
}
