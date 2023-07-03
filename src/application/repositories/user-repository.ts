import { Wallet } from '@application/entities/wallet.entity';
import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: User, wallet: Wallet): Promise<void>;
  // abstract findAll(): Promise<User[] | null>;
  // abstract findById(userId: string): Promise<User | null>;
  // abstract update(user: User): Promise<void>;
  // abstract remove(userId: string): Promise<void>;
}
