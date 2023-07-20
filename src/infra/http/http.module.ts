import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserModule } from './modules/user.module';
import { WalletModule } from './modules/wallet.module';
import { UserAuthModule } from './modules/auth.module';
import { IncomeModule } from './modules/income.module';
import { CategoryModule } from './modules/category.module';
import { ExpenseModule } from './modules/expense.module';
import { PlanningModule } from './modules/planning.module';

@Module({
  imports: [
    UserAuthModule,
    UserModule,
    WalletModule,
    CategoryModule,
    IncomeModule,
    ExpenseModule,
    PlanningModule,
  ],
  providers: [PrismaClient],
})
export class httpModule {}
