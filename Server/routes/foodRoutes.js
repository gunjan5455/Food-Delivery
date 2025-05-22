import express from "express";
import {
  addFood,
  foodList,
  getFoodById,
  updateFoodById,
  deleteFoodByIdPost,
  deleteFoodById,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/food", upload.single("image"), addFood);
foodRouter.get("/food", foodList);
foodRouter.get("/food/:id", getFoodById);
foodRouter.put("/food/:id", upload.single("image"), updateFoodById);
foodRouter.delete("/food/:id", deleteFoodById);
foodRouter.post("/dfood", deleteFoodByIdPost);

export default foodRouter;
