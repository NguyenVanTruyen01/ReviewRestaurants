import {IsEmpty, IsNotEmpty, IsObject} from "@nestjs/class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    user: string

    @IsNotEmpty()
    idRestaurant: string

    @IsNotEmpty()
    content: string
}
