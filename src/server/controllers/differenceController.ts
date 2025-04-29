import { Request, Response } from "express";
import { z } from "zod";
import { differenceService } from "../services/differenceService";

// Validamos que lleguen dos arrays
const schema = z.object({
  x: z.array(z.any()),
  y: z.array(z.any()),
});

export const postDifference = (req: Request, res: Response) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  const { x, y } = parsed.data;
  const diff = differenceService.getDifference(x, y);
  res.json(diff);
};
