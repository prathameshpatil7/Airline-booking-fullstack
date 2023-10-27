const { AirportService } = require("../services/index");
const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "airport created successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a airport !!",
      err: err,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.get(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "airport fetched successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch a airport !!",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airports = await airportService.getAll();
    return res.status(200).json({
      data: airports,
      success: true,
      message: "airport fetched successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch a airport !!",
      err: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.destroy(req.params.id);
    return res.status(200).json({
      success: response,
      message: "airport deleted successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "not able to delete a airport !!",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.update(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "airport updated successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update a airport !!",
      err: err,
    });
  }
};
module.exports = {
  create,
  get,
  destroy,
  update,
  getAll,
};
