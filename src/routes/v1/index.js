const express = require("express");

const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.post("/cities", CityController.createBulk);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);
router.get("/city/:id/airports", CityController.getAllAirportsOfCity);

router.post("/airport", AirportController.create);
// router.post("/airports", AirportController.createBulk);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

module.exports = router;
