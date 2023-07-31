import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserModule } from './modules/user.module';
import { WalletModule } from './modules/wallet.module';
import { UserAuthModule } from './modules/auth.module';
import { IncomeModule } from './modules/income.module';
import { CategoryModule } from './modules/category.module';
import { ExpenseModule } from './modules/expense.module';
import { PlanningModule } from './modules/planning.module';
import { PlanningByCategoryModule } from './modules/planningByCategory.module';
import { ObjectiveModule } from './modules/objective.module';

@Module({
  imports: [
    UserAuthModule,
    UserModule,
    WalletModule,
    CategoryModule,
    IncomeModule,
    ExpenseModule,
    PlanningModule,
    PlanningByCategoryModule,
    ObjectiveModule,
  ],
  providers: [PrismaClient],
})
export class httpModule {}
