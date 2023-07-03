//este archivo para leer variables de entorno
import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST =
  process.env.DB_HOST || "b05klvbeslslyfcggndd-mysql.services.clever-cloud.com";
export const DB__USER = process.env.DB__USER || "u2kxeaivcvz8qyzm";
export const DB_PASSWORD = process.env.DB_PASSWORD || "5o6isce6Ed1qQqPkZ0j4";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_DATABASE = process.env.DB_DATABASE || "b05klvbeslslyfcggndd";
