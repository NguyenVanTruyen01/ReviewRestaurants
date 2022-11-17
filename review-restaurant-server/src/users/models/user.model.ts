import * as mongoose from "mongoose";
import * as bcrypt from "bcryptjs";

const {ObjectId} = mongoose.Schema.Types

export const UserSchema = new mongoose.Schema({
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, trim: true, required: true },

    role: { type: String, enum: ["REVIEWER", "RESTAURANT", "ADMIN"], default: "REVIEWER" },
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    userName: { type: String,trim: true, default: ""},

    dateOfBirth: { type: Date, default: null },
    address: { type: String, trim: true, required: true },
    gender: { type: String, default: "male" },
    phone: { type: String, default:""  },
    avatar: { type: String, default: "https://res.cloudinary.com/dehtpa6ba/image/upload/v1667461910/review_restaurants/default-avatar_roharm.png" },
    coverPicture: { type: String, default: "https://res.cloudinary.com/dehtpa6ba/image/upload/v1667463104/review_restaurants/default-cover_udtlpl.jpg"  },

    followers: [{ type: ObjectId, ref: "User" }],
    following: [{ type: ObjectId, ref: "User" }],

    infoRestaurant: {
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
    }

  },
  { timestamps: true });

// UserSchema.index({firstName: "text"});

UserSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['password']
        return ret
    }
})

export interface UserModel {
  email: String;
  password: String;
  role: String;

  firstName: String;
  lastName: String;
  dateOfBirth: Date;
  address: String;
  gender: String;
  phone: String;
  avatar: String;
  coverPicture: String;

  followers: string[] ;
  following: string[];

  infoRestaurant:  Object;
}