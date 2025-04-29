import { Router } from "express";
import {
  getArticles,
  postArticle,
  patchArticle,
  deleteArticle,
} from "../controllers/articlesController";

const router = Router();

router.get("/", getArticles);

router.post("/", postArticle);

router.patch("/:id", patchArticle);

router.delete("/:id", deleteArticle);

export default router;
