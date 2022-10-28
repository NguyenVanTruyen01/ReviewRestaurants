import * as mongoose from "mongoose";

export const PostsSchema = new mongoose.Schema({
    reviewer: {
      id: String,
      firstName: String,
      lastName: String,
      avatar: String
    },

    idRestaurant: { type: String, required: true },
    content: { type: String },
    likes: { type: Array, default: [] },
    ratingRes: { type: Number, default: 0 },
    images: { type: Array, default: [] }
  },
  { timestamps: true });

export interface PostsModel {
  reviewer: Object,
  idRestaurant: String,
  content: String,
  likes: [],
  ratingRes: Number,
  images: []
}