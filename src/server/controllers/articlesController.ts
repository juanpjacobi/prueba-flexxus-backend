
import { Request, Response } from "express";
import { z } from "zod";
import { articleService } from "../services/articleServices";

const createSchema = z.object({
  name:  z.string().min(1),
  brand: z.string().min(1),
});
const updateSchema = z.object({
  name:    z.string().min(1).optional(),
  brand:   z.string().min(1).optional(),
  active:  z.boolean().optional(),
  dateMod: z.preprocess(
    (s) => (s ? new Date(s as string) : undefined),
    z.date().optional()
  ),
});
const getSchema = z.object({
  name:        z.string().optional(),
  nameExact:   z.string().optional(),
  brand:       z.string().optional(),
  brandExact:  z.string().optional(),
  active:      z.preprocess(val => val === 'true', z.boolean()).optional(),

  updatedExact: z.preprocess(
    val => val ? new Date(val as string) : undefined,
    z.date()
  ).optional(),
  updatedFrom: z.preprocess(
    val => val ? new Date(val as string) : undefined,
    z.date()
  ).optional(),
  updatedTo: z.preprocess(
    val => val ? new Date(val as string) : undefined,
    z.date()
  ).optional(),
});

export const getArticles = async (req: Request, res: Response): Promise<void> => {
  const parsed = getSchema.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json(parsed.error.format());
    return;
  }

  const articles = await articleService.findAll(parsed.data);
  res.json(articles);
};

export const postArticle = async (req: Request, res: Response): Promise<void> => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json(parsed.error.format());
    return;
  }
  const article = await articleService.create(parsed.data);
  res.status(201).json(article);
};

export const patchArticle = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json(parsed.error.format());
    return;
  }

  const updated = await articleService.update(id, parsed.data);
  if (!updated) {
    res.status(404).json({ error: "Artículo no encontrado" });
    return;
  }
  res.json(updated);
};

export const deleteArticle = async (req: Request, res: Response)=> {
  const id = Number(req.params.id);
  const deleted = await articleService.softDelete(id);
  if (!deleted) {
    res.status(404).json({ error: "Artículo no encontrado" });
  }
  res.json(deleted);
};
