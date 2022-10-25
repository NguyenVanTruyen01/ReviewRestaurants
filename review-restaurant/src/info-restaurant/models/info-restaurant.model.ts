import * as mongoose from "mongoose";
import { timestamp } from "rxjs";

export const InfoRestaurantSchema = new mongoose.Schema({
    idRestaurant: { type: String, required: true },
    characteristics: { type: Array, default: [] },
    menu: { type: Array, default: [] },
    minPrice: { type: Number, default: null },
    maxPrice: { type: Number, default: null },
    openTime: Date,
    closeTime: Date,
    utilities: { type: Array, default: [] }, //tiện ích
    facebook: { type: String, default: null },
    instagram: { type: String, default: null },
    introduce: String,
    rating: { type: Number, default: 0 },
    images: { type: Array, default: [] }

  },
  { timestamps: true });

export interface InfoRestaurantModel {
  idRestaurant: String,


  minPrice: Number,
  maxPrice: Number,
  openTime: Date,
  closeTime: Date,

  facebook: String,
  instagram: String,
  introduce: String,
  rating: Number,

}