class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }

  async createBulk(data) {
    try {
      const result = await this.model.bulkCreate(data);
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async destroy(modelId) {
    try {
      await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return true;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async get(id) {
    try {
      const result = await this.model.findByPk(id);
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async getAll() {
    try {
      const results = await this.model.findAll();
      return results;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
}

module.exports = CrudRepository;
