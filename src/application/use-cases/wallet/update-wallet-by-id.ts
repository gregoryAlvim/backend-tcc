import { WalletRepository } from '@application/repositories/wallet-repository';
import { HttpException, Injectable } from '@nestjs/common';
import { Wallet } from '@application/entities/wallet.entity';

interface UpdateWalletByIdRequest {
  user_uuid: string;
  value?: number;
}

@Injectable()
export class UpdateWalletById {
  constructor(private walletRepository: WalletRepository) {}

  async execute({ user_uuid, value }: UpdateWalletByIdRequest): Promise<void> {
    const currentWallet = await this.walletRepository.findWalletByUserId(
      user_uuid,
    );

    if (!currentWallet) {
      throw new HttpException('A carteira do usuário não foi encontrada!', 404);
    }

    const updatedWallet = new Wallet(
      {
        value: value ?? currentWallet.value,
        createdAt: currentWallet.createdAt,
      },
      currentWallet.id,
    );

    await this.walletRepository.update(updatedWallet);
  }
}
