import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
    otp: {
      type: Number,
    },
    otpExpiry: {
      type: Date,
    },
  },
  { minimize: false }
);

const userModel = mongoose.model("users", userSchema);
export default userModel;
