"use strict";
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "Localidades",
      [
        {
          id: 1,
          localidad: "Córdoba",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          localidad: "Carlos Paz",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          localidad: "Buenos Aires",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Localidades", null, {});
  },
};
