import express from "express";
import { onLogin, onRegistration } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", onRegistration);
userRouter.post("/login", onLogin);

export default userRouter;
