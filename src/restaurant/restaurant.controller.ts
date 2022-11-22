import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schema/restaurant.schema';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get('')
  async getAllRestaurant(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  async createRestaurant(@Body() restaurant): Promise<Restaurant> {
    return this.restaurantService.createRestaurant(restaurant);
  }
}
