import * as mongoose from "mongoose";

const {ObjectId} = mongoose.Schema.Types

export  const CommentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    tag: Object,
    reply: ObjectId,
    likes: [{type: ObjectId, ref: 'User'}],
    user: {type: ObjectId, ref: 'User'},
    postId: ObjectId,
    postUserId: ObjectId
}, {timestamps: true})

export interface CommentModel {
    content: {
        type: String,
        required: true
    },
    tag: Object,
    reply: mongoose.Types.ObjectId,
    likes: [{type: mongoose.Types.ObjectId, ref: 'User'}],
    user: {type: mongoose.Types.ObjectId, ref: 'User'},
    postId: mongoose.Types.ObjectId,
    postUserId: mongoose.Types.ObjectId
}