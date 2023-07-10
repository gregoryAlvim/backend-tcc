import { Wallet } from '@application/entities/wallet.entity';

export abstract class WalletRepository {
  abstract update(wallet: Wallet): Promise<void>;
  abstract findWalletByUserId(user_uuid: string): Promise<Wallet | null>;
}
