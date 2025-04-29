import { Router } from "express";
import { postAlumno, getAlumnos } from "../controllers/alumnosController";

const router = Router();

router.post("/", postAlumno);

router.get("/", getAlumnos);

export default router;
