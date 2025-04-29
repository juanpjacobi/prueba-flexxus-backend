import dotenv from "dotenv";
dotenv.config();   
import { Sequelize } from "sequelize";


const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = process.env;

export const sequelize = new Sequelize(
  DB_NAME as string,
  DB_USER as string,
  DB_PASSWORD as string,
  {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: "mysql",
    logging: false,            
    define: {
      timestamps: true,       
    },
  }
);
