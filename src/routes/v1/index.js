const express = require("express");

const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const AirplaneController = require("../../controllers/airplane-controller");
const FlightController = require("../../controllers/flight-controller");
const { FlightMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/city", CityController.create);
router.post("/cities", CityController.createBulk);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.get("/city/:id/airports", CityController.getAllAirportsOfCity);

router.post("/airport", AirportController.create);
router.post("/airports", AirportController.createBulk);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

router.post("/airplane", AirplaneController.create);
router.post("/airplanes", AirplaneController.createBulk);
router.delete("/airplane/:id", AirplaneController.destroy);
router.get("/airplane/:id", AirplaneController.get);
router.get("/airplane", AirplaneController.getAll);
router.patch("/airplane/:id", AirplaneController.update);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", FlightController.update);

module.exports = router;
