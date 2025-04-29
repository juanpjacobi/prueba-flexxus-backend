import { Request, Response } from "express";
import { z } from "zod";
import { sueldosService } from "../services/sueldosService";

const schema = z.object({
  sueldos: z.array(z.number()).length(5),
});

export const postSueldos = (req: Request, res: Response) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  try {
    sueldosService.loadSueldos(parsed.data.sueldos);
    const valores = sueldosService.getValores();
    const lineas = sueldosService.getLineas();
    res.status(201).json({ valores, lineas });
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : err });
  }
};


