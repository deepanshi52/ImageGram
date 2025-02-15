import express from "express";
import { upload } from "../../config/multerConfig.js"; // Import Multer config
import { createPost, deletePost, getAllPosts, updatePost} from "../../Controllers/postControllers.js";
import { Validate } from "../../validators/zodValidator.js";
import { zodPostSchema } from "../../validators/zodPostSchema.js";
import { isAdmin, isAuthenticated } from "../../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /posts:
 * post:
 * Create a new post
 * description: create a new post
 *   responses:
 *      200:
 *     message: Post created successfully
 * 
 */

// Upload image using Cloudinary
router.post("/", upload.single("image") ,Validate(zodPostSchema),createPost);

router.get("/", getAllPosts);

router.delete("/:id", isAuthenticated , deletePost);

router.put("/:id", isAuthenticated, isAdmin ,upload.single('image'), updatePost);

export default router;


// introduce a v1 router now

//write 2 apis to implement deletion of a post and updation of a post