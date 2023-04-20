import "reflect-metadata";

import express from "express";
import { AppDataSource } from './datasource/rocketproject'

import { config as dotenvConfig } from 'dotenv';
dotenvConfig()
import "./database"

import rocketApi from "./routes/api/rocketApi";
import crewApi from "./routes/api/crewApi";
import launchApi from "./routes/api/launchApi";
import crewmanApi from "./routes/api/crewmanApi";



const PORT = process.env.PORT || 3500;
AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());
    app.use("/rocket", rocketApi);
    app.use("/crew", crewApi);
    app.use("/launch", launchApi);
    app.use("/crewman", crewmanApi);

    return app.listen(PORT, () => console.log(`server running at port ${PORT}`));
})