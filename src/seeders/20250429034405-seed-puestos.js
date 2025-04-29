"use strict";
module.exports = {
  up: async (qi) => {
    await qi.bulkInsert(
      "Puestos",
      [
        {
          id: 1,
          puestos: "Soporte",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          puestos: "Analista",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          puestos: "Programador",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          puestos: "Manager",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          puestos: "Arquitecto",
          activo: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (qi) => {
    await qi.bulkDelete("Puestos", null, {});
  },
};
