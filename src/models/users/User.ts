import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../config/database";

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string; 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Users",
    sequelize,
    timestamps: true,
  }
);
