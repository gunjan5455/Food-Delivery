import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.user.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.user.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 85,
      },
      quantity: item.quantity,
    }));
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "delivery charges",
        },
        unit_amount: 2 * 100 * 85,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${"http://localhost:5174"}/verify?success=true&orderId=${
        newOrder._id
      }`,
      cancel_url: `${"http://localhost:5174"}/verify?success=false&orderId=${
        newOrder._id
      }`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Try aagain later" });
  }
};
const verifyPayment = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "payment paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "payment not paid" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "err" });
  }
};
const userOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.user.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, error });
  }
};

// for admin
const orderList = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    res.json({ success: false, error });
  }
};
const updateDeliveryStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "updated" });
  } catch (error) {
    res.json({ success: false, error });
  }
};

export {
  placeOrder,
  verifyPayment,
  userOrder,
  orderList,
  updateDeliveryStatus,
};
