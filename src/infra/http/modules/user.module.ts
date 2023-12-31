import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { CreateUser } from 'src/application/use-cases/user/create-user';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { FindUserById } from '@application/use-cases/user/find-user-by-id';
import { UpdateUserById } from '@application/use-cases/user/update-user-by-id';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser, FindUserById, UpdateUserById],
})
export class UserModule {}
