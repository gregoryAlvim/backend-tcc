import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from 'src/application/repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma-user-repository';
import { WalletRepository } from '@application/repositories/wallet-repository';
import { PrismaWalletRepository } from './repositories/prisma-wallet-repository';

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
  ],
  exports: [UserRepository, WalletRepository],
})
export class DatabaseModule {}
