import { Injectable } from '@nestjs/common';
import { User } from '@application/entities/user.entity';
import { UserRepository } from 'src/application/repositories/user-repository';
import { PrismaService } from '../../prisma.service';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { Wallet } from '@application/entities/wallet.entity';
import { PrismaWalletMapper } from '../mappers/prisma-wallet-mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User, wallet: Wallet): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);
    const walletRaw = PrismaWalletMapper.toPrisma(wallet);

    await this.prisma.user.create({
      data: {
        ...userRaw,
        Wallet: {
          create: {
            ...walletRaw,
          },
        },
      },
      include: {
        Wallet: true,
      },
    });
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async checkIfUserExistsByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  // async update(user: User): Promise<void> {}
  // async remove(userId: string): Promise<void> {}
}
