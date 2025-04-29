import { Router } from "express";
import oddNumbersRouter from "./oddNumbers.routes";
import healthRouter from "./health.routes";
import sueldosRouter from "./sueldos.routes";
import alumnosRouter from "./alumnos.routes";
import articlesRouter from "./articles.route";


const router = Router();

router.use("/health", healthRouter);
router.use("/odd-numbers", oddNumbersRouter);
router.use("/sueldos", sueldosRouter);
router.use("/alumnos", alumnosRouter);
router.use("/articles", articlesRouter);

export default router;
