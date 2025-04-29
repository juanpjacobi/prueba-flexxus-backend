import { Router } from "express";
import oddNumbersRouter from "./oddNumbers.routes";
import healthRouter from "./health.routes";
import sueldosRouter    from "./sueldos.routes";


const router = Router();

router.use("/health", healthRouter);
router.use("/odd-numbers", oddNumbersRouter);
router.use("/sueldos", sueldosRouter);



export default router;
