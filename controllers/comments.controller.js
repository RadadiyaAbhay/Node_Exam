

import { commentsModel } from "../models/comments.model.js";

export const getComments = async (req, res) => {
    try {
        await commentsModel.find({}).populate('userId').populate('articleId').then((data) => {
            res.render("commentList" ,{data})
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(err);
    }
}
export const getComment = async (req, res) => {
    try {
        let { id } = req.params
        await commentsModel.find({ _id: id }).then((data) => {
            res.render("commentList" ,{data})
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(err);
    }
}
export const postComment = async (req, res) => {
    try {
        let {title , description} = req.body
        let userId = req.cookies.setId;
        let data = new commentsModel({
            title , description , userId
        })
        await data.save();
        res.redirect({ message: "Comment Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putComment = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await commentsModel.findByIdAndUpdate(id, data);
        res.json({ message: "Comment Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteComment = async (req, res) => {
    try {
        let { id } = req.params
        await commentsModel.findByIdAndDelete(id);
        res.render({ message: "Comment Delete Successfully" })
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

export const addComment = (req , res) =>{
    res.render("commentForm")
}