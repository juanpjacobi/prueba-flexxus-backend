'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: '1234', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', { username: 'admin' }, {});
  }
};
