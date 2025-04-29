import { Router } from "express";
import alumnosRouter from "./alumnos.routes";
import articlesRouter from "./articles.route";
import healthRouter from "./health.routes";
import oddNumbersRouter from "./oddNumbers.routes";
import reportesRouter from "./reportes.routes";
import sueldosRouter from "./sueldos.routes";


const router = Router();

router.use("/health", healthRouter);
router.use("/odd-numbers", oddNumbersRouter);
router.use("/sueldos", sueldosRouter);
router.use("/alumnos", alumnosRouter);
router.use("/articles", articlesRouter);
router.use("/reports", reportesRouter);


export default router;
