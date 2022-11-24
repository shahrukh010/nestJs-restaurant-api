import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'enter correct email address' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
