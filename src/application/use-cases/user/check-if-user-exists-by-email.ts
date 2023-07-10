import { User } from '@application/entities/user.entity';
import { UserRepository } from '@application/repositories/user-repository';
import { Injectable } from '@nestjs/common';

interface FindUserByEmailRequest {
  email: string;
}

interface FindUserByEmailResponse {
  userExists: User;
}

@Injectable()
export class CheckIfUserExistsByEmail {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
  }: FindUserByEmailRequest): Promise<FindUserByEmailResponse> {
    const userExists = await this.userRepository.checkIfUserExistsByEmail(
      email,
    );

    return { userExists };
  }
}
