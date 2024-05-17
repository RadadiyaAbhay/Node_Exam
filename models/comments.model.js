import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    comment: {
        type: String,
        required: true
    },
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Articles"
    }
},{
    timestamps : true
})

export const commentsModel = mongoose.model('Comments', commentsSchema);