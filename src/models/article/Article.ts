// src/models/Article.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class Article extends Model {
  public id!: number;
  public name!: string;
  public brand!: string;
  public active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "Articles",
    sequelize,
    timestamps: true,
  }
);
