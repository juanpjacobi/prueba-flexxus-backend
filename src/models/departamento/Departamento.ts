import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class Departamento extends Model {
  public id!: number;
  public denominacion!: string;
  public localidad_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Departamento.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    denominacion: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    localidad_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "Departamentos",
    sequelize,
    timestamps: true,
  }
);
