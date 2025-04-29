import { Router } from "express";
import { getOddNumbers } from "../controllers/oddNumbersController";

const router = Router();

router.get("/", getOddNumbers);

export default router;
