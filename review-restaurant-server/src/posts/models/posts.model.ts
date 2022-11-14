import * as mongoose from "mongoose";

const {ObjectId} = mongoose.Schema.Types

export const PostsSchema = new mongoose.Schema({
        user:  {type: ObjectId, ref: 'User'},

        idRestaurant: { type: String, required: true },
        content: { type: String },
        likes: [{ type: ObjectId, ref: 'User' }],
        ratingRes: { type: Number, default: 0 },
        images: { type: Array, default: [] },
        comments: [{ type: ObjectId, ref: 'Comment' }]
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