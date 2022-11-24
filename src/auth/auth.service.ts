import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schema/user.schema';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/signIn.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(signUpDto: SignUpDto): Promise<User> {
    const { name, email, password } = signUpDto;

    const hashPassword = await bcrypt.hash(password, 10);

    //handling error.
    try {
      const user = await this.userModel.create({
        name,
        email,
        password: hashPassword,
      });
      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Duplicate email address');
      }
    }
  }

  async login(loginDto: LoginDto): Promise<User> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email }).select('+password');

    if (!user) {
      throw new UnauthorizedException('Invalid email address or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return user;
  }
}
