import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST || "kashin.db.elephantsql.com",
  port: 80,
  username: process.env.TYPEORM_USERNAME || "auvjtyxo",
  password: process.env.TYPEORM_PASSWORD || "CEexuQTFOLe3-JoZgLXn-rardzeVI6Qi",
  database: process.env.TYPEORM_DATABASE || "auvjtyxo",
  entities: ["src/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  synchronize: true,
  logging: false,
}); 
