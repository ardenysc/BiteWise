import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan"; // logging middleware
import globalRouter from "./routers/globalRouter";
import dbRouter from "./routers/dbRouter";

const getRoot = (req, res) => {
   
    res.send('Hello World');
    // if you just kill the request, you can also res.end();

}

const app = express();

// middlewares (order of middlewares matters)
const logger = morgan("dev"); //"dev": config option. logs interactions with the server

// app.use w/o url : middleware used for all urls 
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


app.use(logger); // logging middleware

// middlewares specific to each url. 
// routers
app.use("/", globalRouter);
app.use("/database", dbRouter);


export default app;