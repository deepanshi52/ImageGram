import { createPostService  } from "../services/postServices.js";


export async function createPost(req, res) {
    try {
      console.log("Uploaded File:", req.file); // Debugging
  
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }
  
      const post = await createPostService({
        caption: req.body.caption,
        image: req.file.path, // Cloudinary URL
      });
  
      return res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: post,
      });
    } catch (error) {
      console.error("Error creating post:", error);
      return res.status(500).json({
        success: false,
        message: "Error creating post",
        error: error.message,
      });
    }
  }
  

export async function getAllPosts(req, res){
    // return unimplemented
    return res.status(501).json({
        success: false,
        message: "Not Implemented",
})
}