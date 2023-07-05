import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { CreateUser } from 'src/application/use-cases/user/create-user';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { FindUserById } from '@application/use-cases/user/find-user-by-id';
import { CheckIfUserExistsByEmail } from '@application/use-cases/user/check-if-user-exists-by-email';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser, FindUserById, CheckIfUserExistsByEmail],
})
export class UserModule {}
