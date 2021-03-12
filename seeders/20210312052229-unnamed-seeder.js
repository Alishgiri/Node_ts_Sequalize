'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Kobe",
          lastName: "Bryant",
          email: "kobe@email.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Shaq",
          lastName: "Diesel",
          email: "shaq@email.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Tim",
          lastName: "Brown",
          email: "tim@email.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
