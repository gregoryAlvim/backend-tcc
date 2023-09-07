import { User } from '@application/entities/user.entity';
import { UserViewModel } from '@infra/http/view-models/user-view-model';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserAuthLogin {
  constructor(private jwtService: JwtService) {}

  async execute(user: User): Promise<any> {
    const payload = {
      username: user.email,
      sub: {
        user_uuid: user.id,
      },
    };

    return {
      user: UserViewModel.toHTTP(user),
      accessToken: this.jwtService.sign(payload, { expiresIn: '1d' }),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }
}
