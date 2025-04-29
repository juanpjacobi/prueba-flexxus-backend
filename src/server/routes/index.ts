import { Router } from "express";
import oddNumbersRouter from "./oddNumbers.routes";
import healthRouter from "./health.routes";

const router = Router();

router.use("/health", healthRouter);
router.use("/odd-numbers", oddNumbersRouter);



export default router;
