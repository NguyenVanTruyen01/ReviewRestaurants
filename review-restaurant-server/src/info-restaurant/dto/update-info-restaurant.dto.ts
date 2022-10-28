import { PartialType } from '@nestjs/swagger';
import { CreateInfoRestaurantDto } from './create-info-restaurant.dto';

export class UpdateInfoRestaurantDto extends PartialType(CreateInfoRestaurantDto) {}
