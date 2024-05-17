

import { articlesModel } from "../models/articles.model.js";

export const getArticles = async (req, res) => {
    try {
        await articlesModel.find({}).populate('userId').then((data) => {
            res.render("articleList" ,{data})
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(err);
    }
}
export const getArticle = async (req, res) => {
    try {
        let { id } = req.params
        await articlesModel.find({ _id: id }).then((data) => {
            res.render("articleList" ,{data})
        }).catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(err);
    }
}
export const postArticle = async (req, res) => {
    try {
        let {title , description} = req.body
        let userId = req.cookies.setId;
        let data = new articlesModel({
            title , description , userId
        })
        await data.save();
        res.redirect({ message: "Article Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putArticle = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await articlesModel.findByIdAndUpdate(id, data);
        res.json({ message: "Article Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteArticle = async (req, res) => {
    try {
        let { id } = req.params
        await articlesModel.findByIdAndDelete(id);
        res.render({ message: "Article Delete Successfully" })
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

export const addArticle = (req , res) =>{
    res.render("articleForm")
}