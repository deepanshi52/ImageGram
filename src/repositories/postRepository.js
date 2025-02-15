import Post from '../schema/post.js'

export const createPost = async (caption ,image, user) => {
        try {
            const newPost = await Post.create({ caption ,image, user });
            return newPost
        } catch (error) {
            console.log(error);
            
        }
}

export const findAllPost = async (offset, limit) => {
    try {
        const posts = await Post.find().sort({createdAt: 
            -1}).skip(offset).limit(limit).populate('user','username email_id')
        return posts;
    } catch (error) {
        console.log(error);
        
    }
}


export const countAllPosts = async () => {
    try {
        const count = await Post.countDocuments();
        return count;
    } catch (error) {
        console.log(error);
        
    }
}

export const findPostbyId = async (id) => {
    try {
        const post = await Post.findbyId(id);
        return post;
    } catch (error) {
        console.log(error);
        
    }
}

export const deletePostbyId = async (id) => {
    try {
        const post = await Post.findByIdAndDelete(id);
        return post;
    } catch (error) {
        console.log(error);
        
    }
}

export const updatePostbyId = async (id, updateObject) => {
    try {
        const post = await Post.findByIdAndUpdate(id,updateObject, {new: true});
        return post;
    } catch (error) {
        console.log(error);
        
    }
}


