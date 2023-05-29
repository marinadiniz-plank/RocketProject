import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "rocket_project",
  entities: ['./**/models/*.{ts,js}'],
  migrations: ['./**/database/migrations/*.{ts,js}'],
  synchronize: true,
  logging: false,
}); 