import {IsEmpty, IsNotEmpty, IsObject} from "@nestjs/class-validator";

export class CreatePostDto {
    @IsObject()
    reviewer: object

    @IsNotEmpty()
    idRestaurant: string

    content: string
}
