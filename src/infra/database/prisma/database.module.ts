import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from 'src/application/repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma-user-repository';
import { WalletRepository } from '@application/repositories/wallet-repository';
import { PrismaWalletRepository } from './repositories/prisma-wallet-repository';
import { CategoryRepository } from '@application/repositories/category-repository';
import { PrismaCategoryRepository } from './repositories/prisma-category-repository';
import { IncomeRepository } from '@application/repositories/ income-repository';
import { PrismaIncomeRepository } from './repositories/prisma-income-repository';
import { ExpenseRepository } from '@application/repositories/expense-repository';
import { PrismaExpenseRepository } from './repositories/prisma-expense-repository';
import { PlanningRepository } from '@application/repositories/planning-repository';
import { PrismaPlanningRepository } from './repositories/prisma-planning-repository';
import { PlanningByCategoryRepository } from '@application/repositories/planning-by-category-repository';
import { PrismaPlanningByCategoryRepository } from './repositories/prisma-planning-by-category-repository';
import { ObjectiveRepository } from '@application/repositories/objective-repository';
import { PrismaObjectiveRepository } from './repositories/prisma-objective-repository';
import { ParcelRepository } from '@application/repositories/parcel-repository';
import { PrismaParcelRepository } from './repositories/prisma-parcel-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: WalletRepository,
      useClass: PrismaWalletRepository,
    },
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
    {
      provide: IncomeRepository,
      useClass: PrismaIncomeRepository,
    },
    {
      provide: ExpenseRepository,
      useClass: PrismaExpenseRepository,
    },
    {
      provide: PlanningRepository,
      useClass: PrismaPlanningRepository,
    },
    {
      provide: PlanningByCategoryRepository,
      useClass: PrismaPlanningByCategoryRepository,
    },
    {
      provide: ObjectiveRepository,
      useClass: PrismaObjectiveRepository,
    },
    {
      provide: ParcelRepository,
      useClass: PrismaParcelRepository,
    },
  ],
  exports: [
    UserRepository,
    WalletRepository,
    CategoryRepository,
    IncomeRepository,
    ExpenseRepository,
    PlanningRepository,
    PlanningByCategoryRepository,
    ObjectiveRepository,
    ParcelRepository,
  ],
})
export class DatabaseModule {}
