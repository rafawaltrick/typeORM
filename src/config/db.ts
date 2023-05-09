import { DataSource } from "typeorm";
import * as dotenv from "dotenv";


dotenv.config();

const USER = process.env.USER || "root";
const PASSWORD = process.env.PASSWORD || "";
const DATABASE = process.env.DATABASE || "";
const HOST = process.env.HOST || "localhost";

const db = new DataSource({
    //url: "postgres://bchrsagk:vyvZo9UENfTEFMzEop2kCjIlWKTZTXPk@silly.db.elephantsql.com/bchrsagk",
    database: "bdAula.db",
    type: "sqlite",
    synchronize: false, 
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
    maxQueryExecutionTime: 2000
});

export default db;