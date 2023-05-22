import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST || "localhost",
  port: parseInt(process.env.TYPEORM_PORT || "5432"),
  username: process.env.TYPEORM_USERNAME || "postgres",
  password: process.env.TYPEORM_PASSWORD|| "postgres",
  database: process.env.TYPEORM_DATABASE|| "rocket_project",
  entities: ['./**/models/*.{ts,js}'],
  migrations: ['./**/database/migrations/*.{ts,js}'],
  synchronize: true,
  logging: false,
}); 