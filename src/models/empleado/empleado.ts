// src/models/Empleado.ts
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class Empleado extends Model {
  public id!: number;
  public nombres!: string;
  public apellido!: string;
  public comision!: number | null;
  public departamento_id!: number;
  public edad!: number;
  public fechaAlta!: Date;
  public puesto_id!: number;
  public sueldo!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Empleado.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    comision: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    departamento_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    fechaAlta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    puesto_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    sueldo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "Empleados",
    sequelize,
    timestamps: true,
  }
);
