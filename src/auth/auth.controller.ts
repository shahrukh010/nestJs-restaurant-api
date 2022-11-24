import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return this.authService.signUp(signUpDto);
  }

  @Get('/login')
  async login(@Body() loginDto: LoginDto): Promise<User> {
    return this.authService.login(loginDto);
  }
}
