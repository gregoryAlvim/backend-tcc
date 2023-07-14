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
  ],
  exports: [
    UserRepository,
    WalletRepository,
    CategoryRepository,
    IncomeRepository,
    ExpenseRepository,
  ],
})
export class DatabaseModule {}
