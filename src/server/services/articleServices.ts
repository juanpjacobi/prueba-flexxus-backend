import { Op } from "sequelize";
import { Article } from "../../models/Article";

interface ArticleFilters {
  name?: string;
  nameExact?: string;
  active?: boolean;
}

interface ArticleCreatePayload {
  name: string;
  brand: string;
}

interface ArticleUpdatePayload {
  name?: string;
  brand?: string;
  dateMod?: Date;
  active?: boolean;
}

export class ArticleService {
  async findAll(filters: ArticleFilters) {
    const where: any = {};
    if (filters.name) {
      where.name = { [Op.like]: `%${filters.name}%` };
    }
    if (filters.nameExact) {
      where.name = filters.nameExact;
    }
    if (filters.active !== undefined) {
      where.active = filters.active;
    }
    return Article.findAll({ where, order: [["name", "ASC"]] });
  }

  async create(data: ArticleCreatePayload) {
    return Article.create({ ...data, dateMod: new Date(), active: true });
  }

  async update(id: number, data: ArticleUpdatePayload): Promise<Article | null> {
    const payload = { ...data, dateMod: new Date() };
    await Article.update(payload, { where: { id } });
    return Article.findByPk(id);
  }

  async softDelete(id: number): Promise<Article | null> {
    await Article.update(
      { active: false, dateMod: new Date() },
      { where: { id } }
    );
    return Article.findByPk(id);
  }
}

export const articleService = new ArticleService();
