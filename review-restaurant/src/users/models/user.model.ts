import * as mongoose from "mongoose";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const UserSchema = new mongoose.Schema({
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, trim: true, required: true },

    role: { type: String, enum: ["REVIEWER", "RESTAURANT", "ADMIN"], default: "REVIEWER" },
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    dateOfBirth: { type: Date, default: null },
    address: { type: String, trim: true, required: true },
    gender: { type: String, default: "male" },
    phone: { type: String, default: null },
    avatar: { type: String, default: null },
    coverPicture: { type: String, default: null },

    followers: { type: Array, default: [] },
    following: { type: Array, default: [] }
  },
  { timestamps: true });

UserSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function() {
  return jwt.sign({ userId: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_TIME });
};


UserSchema.methods.comparePassword = async function(canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

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

  followers: [];
  following: [];
}