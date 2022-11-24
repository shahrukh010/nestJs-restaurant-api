import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Min } from 'class-validator';
import { Document } from 'mongoose';

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email enterd'] })
  email: string;

  @Prop({ select: false })
  @Min(8)
  password: string;

  @Prop({ enum: UserRoles, default: UserRoles.USER })
  role: UserRoles;
}

export const UserSchema = SchemaFactory.createForClass(User);
