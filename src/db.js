import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/bitewise", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB🚀");
const handleError = (error) => console.log("DB Error", error);

// event listener from db
db.on("error", handleError)  // every time when an error is thrown
db.once("open", handleOpen); // we expect connection to happen once


