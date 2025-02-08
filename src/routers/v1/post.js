import express from "express";
import { upload } from "../../config/multerConfig.js"; // Import Multer config
import { createPost, deletePost, getAllPosts, updatePost} from "../../Controllers/postControllers.js";
import { Validate } from "../../validators/zodValidator.js";
import { zodPostSchema } from "../../validators/zodPostSchema.js";

const router = express.Router();

// Upload image using Cloudinary
router.post("/", upload.single("image") ,Validate(zodPostSchema),createPost);

router.get("/", getAllPosts);

router.delete("/:id", deletePost);

router.put("/:id", upload.single('image'), updatePost);

export default router;


// introduce a v1 router now

//write 2 apis to implement deletion of a post and updation of a post