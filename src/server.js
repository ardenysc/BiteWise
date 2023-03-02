import express from "express";
import morgan from "morgan"; // logging middleware
const getRoot = (req, res) => {
    console.log(req);
    res.send('Hello World');
    // if you just kill the request, you can also res.end();

}

const app = express();
const logger = morgan("dev"); //"dev": config option

app.use(express.urlencoded({ extended: true }));
app.use(logger); // logging middleware
app.get("/",getRoot);

export default app;