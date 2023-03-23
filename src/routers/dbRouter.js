import express from "express";
import { handleDbHome, createTestData, showTestData, handleDbPost} from "../controllers/dbController";


const globalRouter = express.Router();

globalRouter.route("/").get(handleDbHome).post(createTestData);
globalRouter.get("/test", createTestData);
globalRouter.get("/test_show", showTestData);
export default globalRouter