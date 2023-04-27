import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['./**/models/*.{ts,js}'],
  migrations: ['./**/database/migrations/*.{ts,js}'],
  synchronize: true,
  logging: false,
}); 
