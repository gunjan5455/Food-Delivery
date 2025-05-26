import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js"; // include `.js` if you're using ES Modules

const onRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password.",
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save new user
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "Registration successful. Please login.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

const onLogin = async (req, res) => {
  console.log("login");
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email, and password.",
      });
    }
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user doesn't exist." });
    }
    const isPassword = bcrypt.compareSync(password, user.password);
    if (!isPassword) {
      return res
        .status(400)
        .json({ success: false, message: "please enter correct password." });
    }

    var token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
      },
      process.env.SECRET
    );
    console.log(token);
    return res
      .status(201)
      .json({ success: true, message: "sucsessfully login ", token: token });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Please try again later",
      error: err.message,
    });
  }
};
export { onRegistration, onLogin };
