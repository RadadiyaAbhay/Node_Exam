import express from "express";
import usersRoutes from "./users.routes.js";
import commentsRoutes from "./comments.routes.js";
import articlesRoutes from "./articles.routes.js";
import { authLogin } from "../middlewares/auth.middleware.js";
let routes = express.Router();

routes.get('/',authLogin ,(req ,res) =>{
    res.render("index")
})
routes.use('/user' , usersRoutes)
routes.use('/article' , articlesRoutes)
routes.use('/comment' , commentsRoutes)

export default routes;