import express from "express";
import {
  removeBgImage,
  generateImage,
} from "../controllers/imageController.js";
import upload from "../middlewares/multer.js";
import authUser from "../middlewares/auth.js";

const imageRouter = express.Router();
// Route for background removal
imageRouter.post("/remove-bg", upload.single("image"), authUser, removeBgImage);

// Route for AI image generation
imageRouter.post("/generate-image", authUser, generateImage);
export default imageRouter;
