import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.user.userId });
    let cartData = userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.user.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (err) {
    console.log(err.message);
    res.json({ success: false, message: "Failed" });
  }
};
const remoceFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.user.userId });
    let cartData = userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.user.userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Failed" });
  }
};
const getFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.user.userId });
    let cartData = userData.cartData;
    res.json({
      success: true,
      message: "successfully fetched data",
      cartData,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Failed" });
  }
};
export { addToCart, remoceFromCart, getFromCart };
