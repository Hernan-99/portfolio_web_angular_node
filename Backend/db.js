import { createPool } from "mysql2/promise.js";
import {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB__USER,
  DB_PASSWORD,
} from "./settings.js";

export const pool = createPool({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB__USER,
  password: DB_PASSWORD,
});
