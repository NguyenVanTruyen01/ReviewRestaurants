import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { InfoRestaurantService } from "../services/info-restaurant.service";
import { CreateInfoRestaurantDto } from "../dto/create-info-restaurant.dto";
import { UpdateInfoRestaurantDto } from "../dto/update-info-restaurant.dto";

@Controller("info-restaurant")
export class InfoRestaurantController {
  constructor(private readonly infoRestaurantService: InfoRestaurantService) {
  }

  @Post()
  create(@Body() createInfoRestaurantDto: CreateInfoRestaurantDto) {
    return this.infoRestaurantService.create(createInfoRestaurantDto);
  }

  @Get()
  findAll() {
    return this.infoRestaurantService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.infoRestaurantService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateInfoRestaurantDto: UpdateInfoRestaurantDto) {
    return this.infoRestaurantService.update(+id, updateInfoRestaurantDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.infoRestaurantService.remove(+id);
  }
}
