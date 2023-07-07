export interface IPayloadJWT {
  username: string;
  sub: {
    user_uuid: string;
  };
}
