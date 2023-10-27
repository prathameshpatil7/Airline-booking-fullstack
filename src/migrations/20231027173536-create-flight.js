"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: null,
        unique: true,
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: null,
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: null,
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: null,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: null,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: null,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: null,
      },
      boardingGate: Sequelize.STRING,
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: null,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
