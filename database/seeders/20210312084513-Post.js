'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        userId: 1,
        title: 'jispotan de u',
        content: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'ddfda de u',
        content: 'Maere mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Posts', null, {});
  }
};
