import express from "express";
import {
  orderList,
  placeOrder,
  updateDeliveryStatus,
  userOrder,
  verifyPayment,
} from "../controllers/orderController.js";
import authMiddlware from "../middlware/auth.middlware.js";

const orderRouter = express.Router();

orderRouter.post("/order", authMiddlware, placeOrder);
orderRouter.post("/verify", verifyPayment);
orderRouter.get("/order", authMiddlware, userOrder);
orderRouter.get("/orderlist", orderList);
orderRouter.post("/status", updateDeliveryStatus);

export default orderRouter;
