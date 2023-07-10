import { UpdateWalletById } from '@application/use-cases/wallet/update-wallet-by-id';
import { WalletController } from '../controllers/wallet.controller';
import { DatabaseModule } from '@infra/database/prisma/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [WalletController],
  providers: [UpdateWalletById],
})
export class WalletModule {}
