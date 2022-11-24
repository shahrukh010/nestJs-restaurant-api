import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter correct email address' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
