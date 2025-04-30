import express from "express";
import { PORT } from "../config";
import apiRouter from "./routes";  
import helmet from "helmet";
import cors from 'cors';
import { authenticateToken } from "./middlware/auth";
import authRouter from "./routes/auth.routes";



const app = express();



app.use(helmet());

const allowedLocal = 'http://localhost:5173';

app.use(cors({
  origin: (incomingOrigin, callback) => {
    if (
      !incomingOrigin ||
      incomingOrigin === allowedLocal ||
      incomingOrigin.endsWith('.netlify.app')
    ) {
      return callback(null, true);
    }
    console.warn(`🚫 CORS bloqueo para Origin=${incomingOrigin}`);
    return callback(new Error(`Origin ${incomingOrigin} no permitido por CORS`));
  },
  credentials: true,
}));
app.use(express.json());
//rutas publicas
app.use('/api/auth', authRouter);

app.use('/api', authenticateToken, apiRouter);



export default app;
