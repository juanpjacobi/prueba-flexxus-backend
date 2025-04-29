'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empleado.init({
    nombres: DataTypes.STRING,
    apellido: DataTypes.STRING,
    comision: DataTypes.DOUBLE,
    departamento_id: DataTypes.INTEGER,
    edad: DataTypes.INTEGER,
    fechaAlta: DataTypes.DATE,
    puesto_id: DataTypes.INTEGER,
    sueldo: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Empleado',
  });
  return Empleado;
};