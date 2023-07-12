import { Wallet } from '@application/entities/wallet.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/application/entities/user.entity';
import { UserRepository } from 'src/application/repositories/user-repository';
import * as bcrypt from 'bcrypt';
import { DefaultCategories } from '@helpers/DefaultCategories';
import { Category } from '@application/entities/category.entity';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

interface CreateUserResponse {
  user: User | null;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute({
    name,
    email,
    password,
    avatar,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const userExists = await this.userRepository.checkIfUserExistsByEmail(
      email,
    );

    if (userExists) {
      throw new HttpException('Este email já está sendo utilizado!', 409);
    }

    const saltOrRounds = 8;
    const cryptPassword = await bcrypt.hash(password, saltOrRounds);

    const user = new User({ name, email, password: cryptPassword, avatar });

    const wallet = new Wallet({ value: 0 });

    const categories = DefaultCategories.map((category) => {
      return new Category({
        name: category.name,
        type: category.type,
        createdAt: category.createdAt,
      });
    });

    await this.userRepository.create(user, wallet, categories);

    return {
      user,
    };
  }
}
