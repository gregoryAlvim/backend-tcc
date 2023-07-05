import { IsNotEmpty, Length } from 'class-validator';

export class UserAuthBody {
  @IsNotEmpty({
    message: 'The user email should not be empty.',
  })
  email: string;

  @IsNotEmpty({
    message: 'The user password should not be empty.',
  })
  @Length(6, 100)
  password: string;
}
