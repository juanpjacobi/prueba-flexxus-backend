import { Request, Response } from "express";
import { oddNumbersService } from "../services/oddNumbersService";

export const getOddNumbers = (_req: Request, res: Response) => {
  try {
    const oddNumbers = oddNumbersService.getOddNumbers();
    res.json({ oddNumbers });
  } catch (err) {
    res.status(500).json({ error: "Error generando los números impares." });
  }
};
