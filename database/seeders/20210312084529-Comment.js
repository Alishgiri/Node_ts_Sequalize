'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Comments', [
      {
        userId: 1, 
        postId: 2,
        comment: "Nulla mollis molestie lore. Quisque ut erat. Curabintur ma ko sonolto.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2, 
        postId: 1,
        comment: "Maecenas tincidunt lacus at velit. Quisque ut erat. Curabintur ma ko sonolto.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Comments', null, {});
  }
};
