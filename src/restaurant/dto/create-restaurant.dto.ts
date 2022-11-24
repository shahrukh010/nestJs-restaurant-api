import { Category } from '../schema/restaurant.schema';

export class CreateRestaurantDto {
  readonly name: string;
  readonly description: string;
  readonly email: string;
  readonly phoneNo: number;
  readonly category: Category;
  readonly address: string;
}
