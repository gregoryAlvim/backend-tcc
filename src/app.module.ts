import { Module } from '@nestjs/common';
import { httpModule } from './infra/http/http.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [httpModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
