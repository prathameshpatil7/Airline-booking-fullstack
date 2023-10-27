const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;

// const { Airport } = require("../models/index");

// class AirportRepository {
//   async createAirport(data) {
//     try {
//       const airport = await Airport.create(data);
//       return airport;
//     } catch (err) {
//       throw new Error("Error" + err);
//     }
//   }

//   async getAirport(airportId) {
//     try {
//       const airport = await Airport.findByPk(airportId);
//       return airport;
//     } catch (err) {
//       throw new Error("Error" + err);
//     }
//   }

//   async deleteAirport(airportId) {
//     try {
//       await Airport.destroy({ where: { id: airportId } });
//       return true;
//     } catch (err) {
//       throw new Error("Error" + err);
//     }
//   }

//   async updateAirport(airportId, data) {
//     try {
//       //   const airport = await Airport.update(data, { where: { id: airportId } });
//       //   return airport;
//       const { name, address, cityId } = data;
//       const airport = await Airport.findByPk(airportId);
//       if (name) {
//         airport.name = name;
//       }
//       if (address) {
//         airport.address = address;
//       }
//       if (cityId) {
//         airport.cityId = cityId;
//       }
//       await airport.save();
//       return airport;
//     } catch (err) {
//       throw new Error("Error" + err);
//     }
//   }

//   async getAllAirports() {
//     try {
//       const airports = await Airport.findAll();
//       return airports;
//     } catch (err) {
//       throw new Error("Error" + err);
//     }
//   }
// }

// module.exports = AirportRepository;
