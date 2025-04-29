import express from "express";
import { PORT } from "../config";
import apiRouter from "./routes";  

const app = express();
app.use(express.json());
app.use("/api", apiRouter);

export default app;
