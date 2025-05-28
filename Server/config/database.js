import mongoose from "mongoose";
import userModel from "../models/userModel.js";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected to DB"));
};
