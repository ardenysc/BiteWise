
import "./db"; // importing the file means it runs the code from the file
import "./models/Food";
import app from "./server";

const PORT = process.env.PORT || 15000; // process.env.PORT works only in heroku. APp uses 9000 when it's local. process.env.PORT uses whatever port heroku gives 

const handleListening = () => {
    console.log(`🌟 Server listening on port http://localhost:${PORT}  🌟`);
}


app.listen(PORT, handleListening);
