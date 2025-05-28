import express from "express";
import {
  onForget,
  onLogin,
  onRegistration,
  onResetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", onRegistration);
userRouter.post("/login", onLogin);
userRouter.post("/forget", onForget);
userRouter.post("/reset", onResetPassword);

export default userRouter;
