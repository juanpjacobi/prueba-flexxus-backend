import { Router, Request, Response } from "express";
const router = Router();

// Ruta de prueba
router.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: Date.now() });
});

export default router;
