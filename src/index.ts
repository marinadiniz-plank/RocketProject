import "reflect-metadata";
import express from "express";
import { Handlers as sentry, init as sentryInit } from "@sentry/node";

sentryInit({
  dsn: "https://e3050bfbe3dd49eeaaa1cbd0258afaab@o4505092836360192.ingest.sentry.io/4505092892393472",
});

import { config as dotenvConfig } from "dotenv";

dotenvConfig();

import { AppDataSource } from "./datasource/rocketproject";
import "./database";

import rocketApi from "./routes/api/rocketApi";
import crewApi from "./routes/api/crewApi";
import launchApi from "./routes/api/launchApi";
import crewmanApi from "./routes/api/crewmanApi";

const app = express();
app.use(sentry.requestHandler());
app.use(sentry.tracingHandler());
const PORT = process.env.PORT || 80;
AppDataSource.initialize().then(() => {
    app.use(express.json());
    app.use("/rocket", rocketApi);
    app.use("/crew", crewApi);
    app.use("/launch", launchApi);
    app.use("/crewman", crewmanApi);

    return app.listen(PORT, () =>
      console.log(`server running at port ${PORT}`)
    );
  }).catch(err => {throw new Error("Could not connect to data base")});

app.use(sentry.errorHandler());
