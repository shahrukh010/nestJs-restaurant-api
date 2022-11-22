import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Restaurant } from './schema/restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: mongoose.Model<Restaurant>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    const restaurant = await this.restaurantModel.find();
    return restaurant;
  }

  async createRestaurant(restaurant: any): Promise<Restaurant> {
    console.log(restaurant);
    const rest = this.restaurantModel.create(restaurant);
    return rest;
  }
}
