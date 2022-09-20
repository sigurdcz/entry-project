import * as dotenv from 'dotenv';
import express from 'express';
import middlewaresBefore from './middleware/before.middleware';
import middlewaresAfter from './middleware/after.middleware';
import {router} from "./router/router";
import * as bodyParser from "body-parser";


//prepare app
const app = express();

//setup .env
dotenv.config();

//parse body
app.use(bodyParser.json());

//use before middlewares
app.use(middlewaresBefore);

//use router
router(app);

//use after middlewares
app.use(middlewaresAfter);

export default app;