const { ClientErrorCodes } = require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // if any of the body params is missing
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing mandatory properties to create a flight",
    });
  }

  next();
};

// we can create another middleware such as
// when we are updating flight, we should not allow client to change parameters such as airplaneId, etc.

module.exports = {
  validateCreateFlight,
};
