"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: null,
        unique: true,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: null,
      },
      departureAirportId: {
        type: DataTypes.INTEGER,
        allowNull: null,
      },
      arrivalAirportId: {
        type: DataTypes.INTEGER,
        allowNull: null,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: null,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: null,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: null,
      },
      boardingGate: DataTypes.STRING,
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: null,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
