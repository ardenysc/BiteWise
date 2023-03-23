import Food from "../models/Food";

export const handleDbHome = (req, res) => res.send("db home");


export const createTestData = async (req, res) => {
    console.log(req.body.name);
    try{
        await Food.create({
            name: req.body.name,
            brand: req.body.brand,
            grade: 3,
            nova: req.body.nova,
            co2: req.body.co2,
            createdAt: Date.now()
        });
    } catch(error) {
        console.log("DB Error! :", error);
    }
    console.log("created food data:" + req.body.name);
    res.end();
}

export const showTestData = async (req, res) => {
    try{
        let foods = await Food.find({})
        console.log(foods);
    } catch(error) {
        console.log("DB Error! :", error);
    }

    res.send("foods");
}


export const handleDbPost = async (req, res) => {
    console.log(req.body);
    
    console.log("post");
    res.end()
}