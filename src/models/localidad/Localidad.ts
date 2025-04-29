import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../../config/database";

export class Localidad extends Model {
  public id!: number;
  public localidad!: string;
  public activo!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Localidad.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  localidad: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  tableName: 'Localidades',
  sequelize,
  timestamps: true
});
