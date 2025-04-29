import { Router } from "express";
import { postDifference } from "../controllers/differenceController";

const router = Router();

router.post('/', postDifference);

export default router;
