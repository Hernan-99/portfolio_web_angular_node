//este archivo para leer variables de entorno
import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB__USER = process.env.DB__USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "admin1234";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_DATABASE = process.env.DB_DATABASE || "portfoliodb";
