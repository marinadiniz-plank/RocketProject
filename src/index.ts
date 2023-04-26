// import "reflect-metadata";

// import express from "express";
// import { AppDataSource } from './datasource/rocketproject'

// import { config as dotenvConfig } from 'dotenv';
// dotenvConfig()
// import "./database"

// import rocketApi from "./routes/api/rocketApi";
// import crewApi from "./routes/api/crewApi";
// import launchApi from "./routes/api/launchApi";
// import crewmanApi from "./routes/api/crewmanApi";



// const PORT = process.env.PORT || 80;
// AppDataSource.initialize().then(() => {
//     const app = express();

//     app.use(express.json());
//     app.use("/rocket", rocketApi);
//     app.use("/crew", crewApi);
//     app.use("/launch", launchApi);
//     app.use("/crewman", crewmanApi);

//     return app.listen(PORT, () => console.log(`server running at port ${PORT}`));
// })


import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
})

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
})