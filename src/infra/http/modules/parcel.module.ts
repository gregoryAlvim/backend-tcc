import { Module } from '@nestjs/common';
import { ParcelController } from '../controllers/parcel.controller';
import { DatabaseModule } from '@infra/database/prisma/database.module';
import { FindParcelById } from '@application/use-cases/parcel/find-parcel-by-id';
import { UpdateParcelById } from '@application/use-cases/parcel/update-parcel-by-id';

@Module({
  imports: [DatabaseModule],
  controllers: [ParcelController],
  providers: [UpdateParcelById, FindParcelById],
})
export class ParcelModule {}
