import express from "express";
import { upload } from "../config/multerConfig.js"; // Import Multer config
import { createPost, getAllPosts } from "../Controllers/postControllers.js";

const router = express.Router();

// Upload image using Cloudinary
router.post("/posts", upload.single("image"), createPost);
router.get("/posts", getAllPosts);

export default router;
