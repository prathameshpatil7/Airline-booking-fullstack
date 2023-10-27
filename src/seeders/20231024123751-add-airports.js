"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Belgavi Airport",
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kempegowda International Airport",
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pune Airport",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sardar Vallabhbhai Patel International Airport",
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
