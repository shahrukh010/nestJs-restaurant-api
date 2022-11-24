import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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

  async findRestaurantById(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);

    if (!restaurant) {
      throw new NotFoundException('Restaurant Not Found.');
    }
    return restaurant;
  }

  async updateRestaurantById(
    id: string,
    restaurant: Restaurant,
  ): Promise<Restaurant> {
    return await this.restaurantModel.findByIdAndUpdate(id, restaurant, {
      new: true,
      runValidators: true,
    });
  }
}
