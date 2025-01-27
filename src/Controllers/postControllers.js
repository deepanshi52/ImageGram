export async function createPost(req, res){
    console.log(req.file);
    
// call the service layer
    return res.json({message: 'Post created successfully'})

}