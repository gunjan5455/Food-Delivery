import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js"; // include `.js` if you're using ES Modules
import sendEmail from "../Utilities/NotificationUtilities.js";
import OTPScript from "../Scripts/OTPScript.js";
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
    const isPassword = await bcrypt.compare(password, user.password);
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
      process.env.SECRET,
      { expiresIn: "1h" }
    );
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

//
const onForget = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(401).send({
        success: false,
        message: "Email is missing!",
      });
    }
    let user = await userModel.findOne({ email });
    if (user == null) {
      return res.status(404).send({
        success: false,
        message: "User doesnot exists with this email Id",
      });
    }
    const otp = otpGenerator();
    console.log(otp);

    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();
    sendEmail(
      [user.email],
      "Reset Password for F00D DELiVERY App",
      OTPScript(user.name, user.email, otp)
    );
    return res.status(200).send({
      status: "success",
      message: `OTP sent successfully on email Id ${user.email}`,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};
const onResetPassword = async (req, res) => {
  const { otp, password } = req.body;
  if (!otp || !password) {
    return res
      .status(400)
      .send({ success: false, message: "OTP or Password Missing" });
  }
  const user = await userModel.findOne({ otp: otp });
  if (user == null) {
    return res.status(404).send({
      success: false,
      message: "OTP is incorrect",
    });
  }
  if (Date.now() > user.otpExpiry) {
    return res.status(404).send({
      success: false,
      message: "OTP has been expired",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  user.password = hashedPassword;
  user.otp = null;
  user.otpExpiry = null;

  await user.save();

  return res.status(200).send({
    success: true,
    message: "Password Reset Successful",
  });
};

export { onRegistration, onLogin, onForget, onResetPassword };
function otpGenerator() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
}
