import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { AppController } from './controllers/app.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
