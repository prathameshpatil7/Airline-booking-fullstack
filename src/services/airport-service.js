const { AirportRepository } = require("../repository/index");
const CrudService = require("./crud-services");

class AirportService extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
  }
}
module.exports = AirportService;

// const { AirportRepository } = require("../repository/index");

// class AirportService {
//   constructor() {
//     this.airportRepository = new AirportRepository();
//   }

//   async createAirport(data) {
//     try {
//       const airport = await this.airportRepository.createAirport(data);
//       return airport;
//     } catch {
//       throw new Error("Error" + err);
//     }
//   }

//   async getAirport(airportId) {
//     try {
//       const airport = await this.airportRepository.getAirport(airportId);
//       return airport;
//     } catch {
//       throw new Error("Error" + err);
//     }
//   }

//   async getAllAirports() {
//     try {
//       const airports = await this.airportRepository.getAllAirports();
//       return airports;
//     } catch {
//       throw new Error("Error" + err);
//     }
//   }

//   async deleteAirport(airportId) {
//     try {
//       const response = await this.airportRepository.deleteAirport(airportId);
//       return response;
//     } catch {
//       throw new Error("Error" + err);
//     }
//   }

//   async updateAirport(airportId, data) {
//     try {
//       const airport = await this.airportRepository.updateAirport(
//         airportId,
//         data
//       );
//       return airport;
//     } catch {
//       throw new Error("Error" + err);
//     }
//   }
// }

// module.exports = AirportService;
