import { User } from '@application/entities/user.entity';
import { UserRepository } from '@application/repositories/user-repository';
import { HttpException, Injectable } from '@nestjs/common';

interface FindUserByIdRequest {
  user_uuid: string;
}

interface FindUserByIdResponse {
  user: User;
}

@Injectable()
export class FindUserById {
  constructor(private userRepository: UserRepository) {}

  async execute({
    user_uuid,
  }: FindUserByIdRequest): Promise<FindUserByIdResponse> {
    const user = await this.userRepository.findById(user_uuid);

    if (!user) {
      throw new HttpException('O usuário não foi encontrado!', 404);
    }

    return { user };
  }
}
