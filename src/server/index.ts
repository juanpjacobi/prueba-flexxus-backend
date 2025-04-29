import express from "express";
import { PORT } from "../config";
import apiRouter from "./routes";  
import helmet from "helmet";
import cors from 'cors';
import { authenticateToken } from "./middlware/auth";
import authRouter from "./routes/auth.routes";

const app = express();

app.use(helmet());

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET','POST','PATCH','DELETE','OPTIONS'],
    credentials: true,
  }));

app.use(express.json());
//rutas publicas
app.use('/api/auth', authRouter);

app.use('/api', authenticateToken, apiRouter);

export default app;
