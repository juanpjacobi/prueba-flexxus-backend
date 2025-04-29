import { Router } from "express";
import { postSueldos } from "../controllers/sueldosController";

const router = Router();

router.post("/", postSueldos);

export default router;
