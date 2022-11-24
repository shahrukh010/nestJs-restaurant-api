import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
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
  async createRestaurant(
    @Body() restaurant: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.createRestaurant(restaurant);
  }

  @Get(':id')
  async findResturantById(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findRestaurantById(id);
  }

  @Put(':id')
  async updateResturant(
    id: string,
    @Body() restaurant: Restaurant,
  ): Promise<Restaurant> {
    return this.restaurantService.updateRestaurantById(id, restaurant);
  }
}
