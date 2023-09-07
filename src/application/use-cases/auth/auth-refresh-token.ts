import { User } from '@application/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface AuthRefreshTokenRequest {
  user_uuid: string;
  username: string;
}

@Injectable()
export class AuthRefreshToken {
  constructor(private jwtService: JwtService) {}

  async execute({
    user_uuid,
    username,
  }: AuthRefreshTokenRequest): Promise<any> {
    const payload = {
      username,
      sub: {
        user_uuid,
      },
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
