import { Injectable } from "@nestjs/common";
import { CreateInfoRestaurantDto } from "../dto/create-info-restaurant.dto";
import { UpdateInfoRestaurantDto } from "../dto/update-info-restaurant.dto";

@Injectable()
export class InfoRestaurantService {
  create(createInfoRestaurantDto: CreateInfoRestaurantDto) {
    return "This action adds a new infoRestaurant";
  }

  findAll() {
    return `This action returns all infoRestaurant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} infoRestaurant`;
  }

  update(id: number, updateInfoRestaurantDto: UpdateInfoRestaurantDto) {
    return `This action updates a #${id} infoRestaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} infoRestaurant`;
  }
}
