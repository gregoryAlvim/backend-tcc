import { Wallet } from '@application/entities/wallet.entity';
import { User } from '../entities/user.entity';
import { Category } from '@application/entities/category.entity';

export abstract class UserRepository {
  abstract create(
    user: User,
    wallet: Wallet,
    categories: Category[],
  ): Promise<void>;
  abstract findById(user_uuid: string): Promise<User | null>;
  abstract checkIfUserExistsByEmail(email: string): Promise<User | null>;
  abstract update(user: User): Promise<void>;
  // abstract remove(userId: string): Promise<void>;
}
