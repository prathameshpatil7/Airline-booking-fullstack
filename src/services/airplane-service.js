const { AirplaneRepository } = require("../repository/index");
const CrudService = require("./crud-services");

class AirplaneService extends CrudService {
  constructor() {
    const airplaneRepository = new AirplaneRepository();
    super(airplaneRepository);
  }
}
module.exports = AirplaneService;
