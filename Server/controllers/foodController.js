import foodModel from "../models/foodModel.js";
import fs from "fs";
import mongoose from "mongoose";

const addFood = async (req, res) => {
  //   let img_filename = `${req.file.filename}`;
  const { name, price, description, category } = req.body;
  //   const { img } = img_filename;
  const image = req.file?.filename;
  try {
    const newFood = new foodModel({
      name,
      price,
      description,
      category,
      image,
    });
    const newFoodResponse = await newFood.save();
    return res.status(201).send({
      success: true,
      message: `Food successfully created with FoodId: ${newFoodResponse._id}`,
      data: newFoodResponse,
    });
  } catch (err) {
    return err;
  }
};

const foodList = async (req, res) => {
  try {
    const allFoods = await foodModel.find({});
    console.log("🍽️ Fetching all food items...");
    return res.status(200).send({
      success: true,
      message: "movies have been fetched",
      data: allFoods,
    });
  } catch (err) {
    return res.status(500).send({ message: "Internal Error" });
  }
};
const getFoodById = async (req, res) => {
  try {
    const Food = await foodModel.findById(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Food have been fetched",
      data: Food,
    });
  } catch (err) {
    return res.status(500).send({ message: "Internal Error" });
  }
};

const updateFoodById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).send({
        success: false,
        message: `this id: ${req.params.id} is invalid `,
      });
    }
    const food = await foodModel.findById(req.params.id);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: `this fod with id: ${req.params.id} is not found `,
      });
    }
    const updateFood = await foodModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updateFood != null) {
      return res.status(200).send({
        success: true,
        message: `this food with id: ${req.params.id} is successfully updated `,
        data: updateFood,
      });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal error " });
  }
};

const deleteFoodByIdPost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
      return res.status(404).send({
        success: false,
        message: `this id: ${req.body.id} is invalid `,
      });
    }
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: `this fod with id: ${req.body.id} is not found `,
      });
    }

    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);

    return res.status(404).send({
      success: true,
      message: `this food with id: ${req.body.id} is successfully deleted `,
    });
  } catch (err) {
    return res.status(500).send({ message: "Internal error ", err });
  }
};

const deleteFoodById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).send({
        success: false,
        message: `this id: ${req.params.id} is invalid `,
      });
    }
    const food = await foodModel.findById(req.params.id);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: `this fod with id: ${req.params.id} is not found `,
      });
    }
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) {
        console.error("Error deleting image file:", err.message);
      } else {
        console.log("Image deleted successfully");
      }
    });
    const deleteFood = await foodModel.findByIdAndDelete(req.params.id);
    if (deleteFood != null) {
      return res.status(200).send({
        success: true,
        message: `this food with id: ${req.params.id} is successfully deleted `,
      });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal error ", err });
  }
};

export {
  addFood,
  foodList,
  getFoodById,
  updateFoodById,
  deleteFoodByIdPost,
  deleteFoodById,
};
