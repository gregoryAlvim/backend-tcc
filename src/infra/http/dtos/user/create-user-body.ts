import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'The user name should not be empty.',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty({
    message: 'The user email should not be empty.',
  })
  email: string;

  @IsNotEmpty({
    message: 'The user password should not be empty.',
  })
  @Length(6, 100)
  password: string;

  avatar?: string;
}
