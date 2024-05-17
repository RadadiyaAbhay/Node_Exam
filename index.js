import express from "express"
import env from "dotenv";
import db from "./config/db.js";
import routes from "./routes/index.js";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

env.config();
let port = process.env.PORT || 3001

let app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'))
app.use('/', routes)
app.listen(port,() =>{
    console.log(`server is running on ${port}`);
})