import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { PrismaClient } from '@prisma/client';
import { UserAuthModule } from './modules/auth.module';

@Module({
  imports: [UserAuthModule, UserModule],
  controllers: [],
  providers: [PrismaClient],
})
export class httpModule {}
