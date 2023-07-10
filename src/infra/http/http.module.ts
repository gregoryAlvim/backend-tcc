import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { PrismaClient } from '@prisma/client';
import { UserAuthModule } from './modules/auth.module';
import { WalletModule } from './modules/wallet.module';
import { CategoryModule } from './modules/category.module';

@Module({
  imports: [UserAuthModule, UserModule, WalletModule, CategoryModule],
  providers: [PrismaClient],
})
export class httpModule {}
