import mongoose from "mongoose";
import userModel from "../models/userModel.js";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gunjankotadiya5455:tN0OsfcUB1ARD7Et@cluster0.hljnj.mongodb.net/Food_Delivery?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Connected to DB"));
};

// "mongodb+srv://gunjankotadiya5455:tN0OsfcUB1ARD7Et@cluster0.hljnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
