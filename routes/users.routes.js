import express from "express";
import { getUsers, loginUser, registerUser, viewloginUser, viewregisterUser } from "../controllers/users.controller.js";
let usersRoutes = express.Router();

usersRoutes.get('/',getUsers)
usersRoutes.get('/viewregister',viewregisterUser)
usersRoutes.post('/register',registerUser)
usersRoutes.get('/viewlogin',viewloginUser)
usersRoutes.post('/login',loginUser)

export default usersRoutes;