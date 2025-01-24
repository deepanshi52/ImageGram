import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5
      },
      email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        validate: {
            validator: function(emailValue){
           return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
             },
        message: 'Invalid email format'      
               },
 },
      password: {
        type: String,
        required: true,
        minLength: 5,
      }
    });

const user = mongoose.model("User", schema);

export default user;

//implement user schema
//implement post schema