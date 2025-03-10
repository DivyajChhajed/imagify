import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/userModel.js";
import { messageInRaw } from "svix";

const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const user = await userModel.findOne({ clerkId });
    if (!user) {
      return res.json({ success: false, message: "User Not Found!" });
    }
    if (user.creditBalance === 0) {
      res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }
    const imagePath = req.file.path;

    // File read
    const imageFile = fs.createReadStream(imagePath);
    const formData = new FormData();
    formData.append("image_file", imageFile);
    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formData,
      {
        headers: { "x-api-key": process.env.CD_API_KEY },
        responseType: "arraybuffer",
      }
    );
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });
    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Background Removed",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
const generateImage = async (req, res) => {
  try {
    const { clerkId, prompt } = req.body; // Accept user prompt for image generation
    const user = await userModel.findOne({ clerkId });

    if (!user) {
      return res.json({ success: false, message: "User Not Found!" });
    }

    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // Prepare API request to generate an image
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1", // Replace with the actual Clipdrop API endpoint
      { prompt }, // Sending the text prompt for image generation
      {
        headers: { "x-api-key": process.env.CD_API_KEY },
        responseType: "arraybuffer",
      }
    );

    // Convert generated image to Base64 format
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Deduct one credit after successful image generation
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Image Generated Successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { removeBgImage, generateImage };
