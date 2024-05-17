import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    }
},{
    timestamps : true
})

export const articlesModel = mongoose.model('Articles', articlesSchema);