import { IPayloadJWT } from '@application/interfaces/i-payload-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.SECRET_KEY}`,
    });
  }

  async validate(payload: IPayloadJWT) {
    return { user_uuid: payload.sub.user_uuid, username: payload.username };
  }
}
