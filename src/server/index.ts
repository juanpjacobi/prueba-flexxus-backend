import express from "express";
import { PORT } from "../config";
import router from "./routes";

const app = express();
app.use(express.json());
app.use("/api", router);

export default app;
