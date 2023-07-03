import { Module } from '@nestjs/common';
import { httpModule } from './infra/http/http.module';

@Module({
  imports: [httpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
