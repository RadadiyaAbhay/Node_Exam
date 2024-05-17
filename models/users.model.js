import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    role: {
        type : String,
        required : true,
        enum: ["user", "admin"],
        default : "user",
    },
    articles :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Articles",
        required : false
    }
},
{
    timestamps : true
})

export const userModel = mongoose.model('Users',usersSchema);