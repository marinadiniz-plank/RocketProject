import "reflect-metadata";
import express from "express";
import { Handlers as sentry, init as sentryInit } from "@sentry/node";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

sentryInit({
  dsn: process.env.SENTRY_DSN,
});

import { AppDataSource } from "./datasource/rocketproject";
import "./database";

import rocketApi from "./routes/api/rocketApi";
import crewApi from "./routes/api/crewApi";
import launchApi from "./routes/api/launchApi";
import crewmanApi from "./routes/api/crewmanApi";
import { CorsConfig } from "./config/corsConfig";

const app = express();
app.use(sentry.requestHandler());
app.use(sentry.tracingHandler());
app.use(CorsConfig);

const PORT = process.env.PORT || 80;

AppDataSource.initialize().then(() => {
    app.use(express.json());
    app.use("/rocket", rocketApi);
    app.use("/crew", crewApi);
    app.use("/launch", launchApi);
    app.use("/crewman", crewmanApi);

    return app.listen(PORT, () =>
      console.log(`Server running at port ${PORT}`)
    );
  }).catch(err => {throw new Error("Could not connect to data base")});

app.use(sentry.errorHandler());
