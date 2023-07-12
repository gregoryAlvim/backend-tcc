import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserModule } from './modules/user.module';
import { WalletModule } from './modules/wallet.module';
import { UserAuthModule } from './modules/auth.module';
import { IncomeModule } from './modules/income.module';
import { CategoryModule } from './modules/category.module';

@Module({
  imports: [
    UserAuthModule,
    UserModule,
    WalletModule,
    CategoryModule,
    IncomeModule,
  ],
  providers: [PrismaClient],
})
export class httpModule {}
