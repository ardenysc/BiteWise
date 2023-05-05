import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: String,
    brand: String,
    grade: Number,
    nova: Number,
    co2: Number,
    createdAt: Date
});


const Food = mongoose.model("Food", foodSchema);
export default Food;