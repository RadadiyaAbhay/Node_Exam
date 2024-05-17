import express from "express";
import { getComments } from "../controllers/comments.controller.js";
let commentsRoutes = express.Router();

commentsRoutes.get('/',getComments)

export default commentsRoutes