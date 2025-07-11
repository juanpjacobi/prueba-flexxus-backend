import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),  
    dialect: 'mysql',
    logging: false,
    define: { timestamps: true },
  }
);
