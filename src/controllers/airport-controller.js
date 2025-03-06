const { AirportService } = require("../services/index");
const airportService = new AirportService();
const { SuccessCodes, ServerErrorCodes } = require("../utils/error-codes");

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: airport,
      success: true,
      message: "airport created successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "not able to create a airport !!",
      err: err,
    });
  }
};

const createBulk = async (req, res) => {
  try {
    const airport = await airportService.createBulk(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: airport,
      success: true,
      message: "Successfully created a airport !!",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "airport fetched successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
    return res.status(SuccessCodes.OK).json({
      data: airports,
      success: true,
      message: "airport fetched successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
    return res.status(SuccessCodes.OK).json({
      success: response,
      message: "airport deleted successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "not able to delete a airport !!",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.update(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "airport updated successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "not able to update a airport !!",
      err: err,
    });
  }
};
module.exports = {
  create,
  createBulk,
  get,
  destroy,
  update,
  getAll,
};
