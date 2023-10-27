const { CityService } = require("../services/index");
const cityService = new CityService();

// POST -> /city -> req.body
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city !!",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a city !!",
      err: err,
    });
  }
};

// POST -> /cities -> req.body
const createBulk = async (req, res) => {
  try {
    const city = await cityService.createBulkCities(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city !!",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a city !!",
      err: err,
    });
  }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      success: response,
      message: "Successfully deleted the city !!",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Not able to delete the city !!",
      err: err,
    });
  }
};

// GET -> /city/:id
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched the city !!",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch the city !!",
      err: err,
    });
  }
};

// PUT -> /city/:id -> req.body
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);

    // const city = await cityService.fin
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully updated the city !!",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to update the city !!",
      err: err,
    });
  }
};

// GET -> /city -> req.query || Blank
const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched all cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the cities",
      err: error,
    });
  }
};

const getAllAirportsOfCity = async (req, res) => {
  try {
    const cityId = req.params.id;

    const airportLists = await cityService.getAllAirportsOfCity(cityId);

    return res.status(200).json({
      data: airportLists,
      success: true,
      message: "Successfully fetched all airports",
      err: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  create,
  createBulk,
  destroy,
  get,
  update,
  getAll,
  getAllAirportsOfCity,
};
