import express from "express";
import { PORT } from "../config";
import apiRouter from "./routes";  
import helmet from "helmet";
import cors from 'cors';
import { authenticateToken } from "./middlware/auth";
import authRouter from "./routes/auth.routes";

const allowedOrigins = [
  'http://localhost:5173',
  'https://prueba-flxxs.netlify.app/'
];

const app = express();



app.use(helmet());

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: Origen ${origin} no permitido`));
    }
  },
  methods: ['GET','POST','PATCH','DELETE','OPTIONS'],
  credentials: true,
}));

app.use(express.json());
//rutas publicas
app.use('/api/auth', authRouter);

app.use('/api', authenticateToken, apiRouter);



export default app;
