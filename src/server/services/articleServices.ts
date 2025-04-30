import { Op, WhereOptions } from "sequelize";
import { Article } from "../../models";

export interface ArticleFilters {
  name?: string;
  nameExact?: string;
  brand?: string;
  brandExact?: string;
  active?: boolean;
  updatedFrom?: Date;
  updatedTo?: Date;
  updatedExact?: Date;
}

interface ArticleCreatePayload {
  name: string;
  brand: string;
}

interface ArticleUpdatePayload {
  name?: string;
  brand?: string;
  active?: boolean;
}

export class ArticleService {
  async findAll(filters: ArticleFilters) {
    const where: WhereOptions = {};

    if (filters.name) {
      where.name = { [Op.like]: `%${filters.name}%` };
    }
    if (filters.nameExact) {
      where.name = filters.nameExact;
    }

    if (filters.brand) {
      where.brand = { [Op.like]: `%${filters.brand}%` };
    }
    if (filters.brandExact) {
      where.brand = filters.brandExact;
    }

    if (filters.active !== undefined) {
      where.active = filters.active;
    }

    if (filters.updatedExact) {
      where.updatedAt = filters.updatedExact;
    }
    if (filters.updatedFrom || filters.updatedTo) {
      where.updatedAt = {};
      if (filters.updatedFrom) {
        where.updatedAt[Op.gte] = filters.updatedFrom;
      }
      if (filters.updatedTo) {
        where.updatedAt[Op.lte] = filters.updatedTo;
      }
    }
    return Article.findAll({ where, order: [["name", "ASC"]] });
  }

  async create(data: ArticleCreatePayload) {
    return Article.create({ ...data, updatedAt: new Date(), active: true });
  }

  async update(id: number, data: ArticleUpdatePayload): Promise<Article | null> {
    await Article.update(data, { where: { id } });
    return Article.findByPk(id);
  }

  async softDelete(id: number): Promise<Article | null> {
    await Article.update(
      { active: false },
      { where: { id } }
    );
    return Article.findByPk(id);
  }
}

export const articleService = new ArticleService();
