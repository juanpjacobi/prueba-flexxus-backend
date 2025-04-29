"use strict";
module.exports = {
  up: async (qi) => {
    await qi.bulkInsert(
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
        {
          id: 4,
          localidad: "Rosario",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          localidad: "Mendoza",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (qi) => {
    await qi.bulkDelete("Localidades", null, {});
  },
};
