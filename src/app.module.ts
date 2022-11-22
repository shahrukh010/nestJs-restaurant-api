import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RestaurantModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongodb:DjG8hkIP1KiQ9QBp@cluster0.uisntpy.mongodb.net/restaurant?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
