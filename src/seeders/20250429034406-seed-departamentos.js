"use strict";
module.exports = {
  up: async (qi) => {
    await qi.bulkInsert(
      "Departamentos",
      [
        {
          id: 1,
          denominacion: "Ventas",
          localidad_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          denominacion: "Soporte",
          localidad_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          denominacion: "Desarrollo",
          localidad_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          denominacion: "Marketing",
          localidad_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          denominacion: "RRHH",
          localidad_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          denominacion: "Logística",
          localidad_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (qi) => {
    await qi.bulkDelete("Departamentos", null, {});
  },
};
