import { User } from '@application/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthRefreshToken {
  constructor(private jwtService: JwtService) {}

  async execute(user: User): Promise<any> {
    const payload = {
      username: user.email,
      sub: {
        user_uuid: user.id,
      },
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
