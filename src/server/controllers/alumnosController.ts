import { Request, Response } from "express";
import { z } from "zod";
import { alumnosService } from "../services/alumnosService";

const schema = z.object({
  nombre: z.string().min(1),
  edad: z.number().int().min(0),
});

export const postAlumno = (req: Request, res: Response) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  try {
    const { nombre, edad } = parsed.data;
    alumnosService.createAlumno(nombre, edad);
    res.status(201).json({
      datos: alumnosService.getDatos(),
      mayoria: alumnosService.getMayorEdadMsgs(),
    });
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : err });
  }
};

export const getAlumnos = (_req: Request, res: Response) => {
  try {
    res.json({
      datos: alumnosService.getDatos(),
      mayoria: alumnosService.getMayorEdadMsgs(),
    });
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : err });
  }
};
