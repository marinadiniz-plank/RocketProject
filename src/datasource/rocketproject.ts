import { DataSource } from "typeorm";
import { Rocket } from "../models/Rocket";
import { Launch } from "../models/Launch";
import { Crew } from "../models/Crew";
import { Crewman } from "../models/Crewman";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST || "localhost",
  port: 5432,
  username: process.env.TYPEORM_USERNAME || "postgres",
  password: process.env.TYPEORM_PASSWORD || "postgres",
  database: process.env.TYPEORM_DATABASE || "rocket_project",
  entities: ["src/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  synchronize: true,
  logging: false,
}); 