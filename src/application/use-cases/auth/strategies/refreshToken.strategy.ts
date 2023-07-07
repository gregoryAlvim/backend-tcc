import { IPayloadJWT } from '@application/interfaces/i-payload-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh'),
      ignoreExpiration: false,
      secretOrKey: `${process.env.SECRET_KEY}`,
    });
  }

  async validate(payload: IPayloadJWT) {
    return { user_uuid: payload.sub.user_uuid, username: payload.username };
  }
}
