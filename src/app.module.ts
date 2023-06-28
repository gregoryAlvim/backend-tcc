import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma.service';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
