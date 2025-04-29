import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class Puesto extends Model {
  public id!: number;
  public puestos!: string;
  public activo!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Puesto.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    puestos: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "Puestos",
    sequelize,
    timestamps: true,
  }
);
