import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaClient],
})
export class httpModule {}
