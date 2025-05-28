import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
const app = express();
// const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food", foodRouter);
app.use("/api", userRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Working");
});

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
