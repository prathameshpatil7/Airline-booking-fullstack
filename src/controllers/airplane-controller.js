const { AirplaneService } = require("../services/index");
const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.create(req.body);
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "airplane created successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a airplane !!",
      err: err,
    });
  }
};

const createBulk = async (req, res) => {
  try {
    const airplane = await airplaneService.createBulk(req.body);
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Successfully created a airplane !!",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create a airplane !!",
      err: err,
    });
  }
};
const get = async (req, res) => {
  try {
    const airplane = await airplaneService.get(req.params.id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "airplane fetched successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch a airplane !!",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airplanes = await airplaneService.getAll();
    return res.status(200).json({
      data: airplanes,
      success: true,
      message: "airplane fetched successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch a airplane !!",
      err: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airplaneService.destroy(req.params.id);
    return res.status(200).json({
      success: response,
      message: "airplane deleted successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "not able to delete a airplane !!",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const airplane = await airplaneService.update(req.params.id, req.body);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "airplane updated successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update a airplane !!",
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
