import express from "express";
import { PORT } from "../config";
import apiRouter from "./routes";  // ahora es el índice de todas las rutas

const app = express();
app.use(express.json());

// Montamos todas las rutas bajo /api
app.use("/api", apiRouter);

export default app;
