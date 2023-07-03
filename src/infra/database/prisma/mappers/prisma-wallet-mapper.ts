import { Wallet } from '@application/entities/wallet.entity';
import { Wallet as RawWallet } from '@prisma/client';

export class PrismaWalletMapper {
  static toPrisma(wallet: Wallet) {
    return {
      id: wallet.id,
      value: wallet.value,
      createdAt: wallet.createdAt,
    };
  }

  static toDomain(raw: RawWallet): Wallet {
    return new Wallet(
      {
        value: raw.value,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
