import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true,
        minLength: 5,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        user: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const post = mongoose.model("Post", postSchema); //post a collection

export default post;