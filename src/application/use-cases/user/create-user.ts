import { Wallet } from '@application/entities/wallet.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/application/entities/user.entity';
import { UserRepository } from 'src/application/repositories/user-repository';
import * as bcrypt from 'bcrypt';
import { CheckIfUserExistsByEmail } from './check-if-user-exists-by-email';

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
  constructor(
    private userRepository: UserRepository,
    private checkIfUserExistsByEmail: CheckIfUserExistsByEmail,
  ) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, password, avatar } = request;

    const { userExists } = await this.checkIfUserExistsByEmail.execute({
      email,
    });

    if (userExists) {
      throw new HttpException('Este email já está sendo utilizado!', 409);
    }

    const saltOrRounds = 8;
    const cryptPassword = await bcrypt.hash(password, saltOrRounds);

    const wallet = new Wallet({ value: 0 });
    const user = new User({ name, email, password: cryptPassword, avatar });

    await this.userRepository.create(user, wallet);

    return {
      user,
    };
  }
}
