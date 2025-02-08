import { countAllPosts, createPost, deletePostbyId, findAllPost, updatePostbyId  } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    //const user = createPostObject.user;

    const post = await createPost(caption, image)

    return post;
}

export const getAllPostsService = async (Offset, limit) => {
    const posts = await findAllPost(Offset, limit);
    // calculate total number of posts and pages
   const totalDocuments = await countAllPosts();

   const totalPages = Math.ceil(totalDocuments / limit);

   return{ 
    posts, totalPages , totalDocuments
   }

}
    
export const deletePostService = async(id) => {
     //call the repository function
     const response = await deletePostbyId(id);
     console.log("response from repo", response);
     
     return response;
}
    
export const updatePostService = async(id, updateObject) => {
       const response = await updatePostbyId(id, updateObject);
       return response;
}
