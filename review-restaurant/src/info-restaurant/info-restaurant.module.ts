import { Module } from "@nestjs/common";
import { InfoRestaurantService } from "./services/info-restaurant.service";
import { InfoRestaurantController } from "./controllers/info-restaurant.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { InfoRestaurantSchema } from "./models/info-restaurant.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "InfoRestaurant", schema: InfoRestaurantSchema }])],
  controllers: [InfoRestaurantController],
  providers: [InfoRestaurantService]
})
export class InfoRestaurantModule {
}
