import {IsNotEmpty} from "@nestjs/class-validator";

export class CreateInfoRestaurantDto {
    @IsNotEmpty()
    idRestaurant: string

    @IsNotEmpty()
    nameRestaurant: string
}
