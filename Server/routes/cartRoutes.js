import express from "express";
import {
  addToCart,
  getFromCart,
  remoceFromCart,
} from "../controllers/cartController.js";
import authMiddlware from "../middlware/auth.middlware.js";

const cartRouter = express.Router();

cartRouter.post("/cart", authMiddlware, addToCart);
cartRouter.put("/cart", authMiddlware, remoceFromCart);
cartRouter.get("/cart", authMiddlware, getFromCart);
export default cartRouter;
