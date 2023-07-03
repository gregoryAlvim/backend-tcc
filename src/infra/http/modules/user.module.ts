import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { CreateUser } from 'src/application/use-cases/user/create-user';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser],
})
export class UserModule {}
