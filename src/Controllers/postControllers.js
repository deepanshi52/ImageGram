import { response } from "express";
import { createPostService, deletePostService, getAllPostsService, updatePostService  } from "../services/postServices.js";


export async function createPost(req, res) {
    try {
      console.log("Uploaded File:", req.file); // Debugging
  
      if (!req.file || !req.file.location) {
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
         try {
          const limit = req.query.limit || 10;
          const offset = req.query.offset || 0;

          const paginatedPosts = await getAllPostsService(offset, limit);

          return res.status(200).json({
            success: true,
            message:  "All posts fetched successfully",
            data: paginatedPosts
          });

         } catch (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
          
         }

    // return unimplemented
    //return res.status(501).json({
      //  success: false,
        //message: "Not Implemented",
}

export async function deletePost(req, res){
 try {
  const postId = req.params.id;
  const response = await deletePostService(postId);
  if(!response){
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }
  
  return res.status(200).json(({
    success: true,
    message: "Post Deleted Successfully",
    data: response
  }));
 } catch (error) {
  
 }
}


export async function updatePost(req, res){
  try {
    console.log("req file", req.file);
    
    const updateObject = req.body;
    if(req.file){
      updateObject.image = req.file.location;
    
    }
    const response = await updatePostService(req.params.id , updateObject);
    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: response
     });
  } catch (error) {
   console.log(error);
   return res.status(500).json({
    success: false,
    message: "Interal Server Error"
   });
   
  }
}