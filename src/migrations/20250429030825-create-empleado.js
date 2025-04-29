"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Empleados", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nombres: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      comision: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      departamento_id: {
        type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
        references: { model: "Departamentos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      edad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fechaAlta: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      puesto_id: {
        type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
        references: { model: "Puestos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sueldo: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Empleados");
  },
};
