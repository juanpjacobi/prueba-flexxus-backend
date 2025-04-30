
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          name: 'Flexxus PowerBank',
          brand: 'Flexxus',
          active: true,
          createdAt: new Date('2025-03-01T08:30:00Z'),
          updatedAt: new Date('2025-04-10T10:15:00Z'),
        },
        {
          name: 'Flexxus Earbuds',
          brand: 'Flexxus',
          active: true,
          createdAt: new Date('2025-02-15T12:00:00Z'),
          updatedAt: new Date('2025-04-12T09:00:00Z'),
        },
        {
          name: 'Alpha Smartphone',
          brand: 'AlphaTech',
          active: true,
          createdAt: new Date('2025-01-20T14:45:00Z'),
          updatedAt: new Date('2025-04-08T16:30:00Z'),
        },
        {
          name: 'Beta Laptop',
          brand: 'BetaCorp',
          active: false,
          createdAt: new Date('2025-03-10T09:20:00Z'),
          updatedAt: new Date('2025-04-05T11:10:00Z'),
        },
        {
          name: 'Gamma Tablet',
          brand: 'GammaWorks',
          active: true,
          createdAt: new Date('2025-02-28T07:50:00Z'),
          updatedAt: new Date('2025-04-11T13:25:00Z'),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(
      'Articles',
      {
        name: [
          'Flexxus PowerBank',
          'Flexxus Earbuds',
          'Alpha Smartphone',
          'Beta Laptop',
          'Gamma Tablet',
        ],
      },
      {}
    );
  },
};

