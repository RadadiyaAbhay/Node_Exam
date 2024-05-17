import express from "express";
import { addArticle, getArticles, postArticle } from "../controllers/articles.controller.js";
let articlesRoutes = express.Router();
 
articlesRoutes.get('/',getArticles)
articlesRoutes.get('/add',addArticle)
articlesRoutes.post('/postarticle',postArticle)

export default articlesRoutes;