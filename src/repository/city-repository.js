const { Op } = require("sequelize");

const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      throw new Error("Erro:" + err);
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch {
      throw new Error("Erro:" + err);
    }
  }

  async updateCity(cityId, data) {
    try {
      // the below approach will also workd but will not return updated obj return array having number of affected rows eg. [1]
      // if we re using PGSQL, we can use here returning: true, plain: true

      //   const city = await City.update(data, {
      //     where: {
      //       id: cityId,
      //     },
      //   });

      // for getting updated data in MYSQL we use below method
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch {
      throw new Error("Erro:" + err);
    }
  }
}
module.exports = CityRepository;
