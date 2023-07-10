import { Injectable } from '@nestjs/common';
import { User } from '@application/entities/user.entity';
import { UserRepository } from 'src/application/repositories/user-repository';

import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { Wallet } from '@application/entities/wallet.entity';
import { PrismaWalletMapper } from '../mappers/prisma-wallet-mapper';
import { Category } from '@application/entities/category.entity';
import { PrismaCategoryMapper } from '../mappers/prisma-category-mapper';
import { PrismaService } from '@infra/database/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    user: User,
    wallet: Wallet,
    categories: Category[],
  ): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);
    const walletRaw = PrismaWalletMapper.toPrisma(wallet);

    const categoriesRaw = categories.map((category) =>
      PrismaCategoryMapper.toPrisma(category),
    );

    await this.prisma.user.create({
      data: {
        ...userRaw,
        Wallet: {
          create: {
            ...walletRaw,
          },
        },
        Category: {
          createMany: {
            data: categoriesRaw,
          },
        },
      },
      include: {
        Wallet: true,
      },
    });
  }

  async findById(user_uuid: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: user_uuid,
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

  async update(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.update({
      where: {
        id: userRaw.id,
      },
      data: userRaw,
    });
  }
}
