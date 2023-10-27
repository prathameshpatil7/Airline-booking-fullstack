class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }

  async createBulk(data) {
    try {
      const result = await this.repository.createBulk(data);
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async destroy(repositoryId) {
    try {
      await this.repository.destroy(repositoryId);
      return true;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async get(id) {
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async getAll() {
    try {
      const results = await this.repository.getAll();
      return results;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
  async update(repositoryId, data) {
    try {
      const result = await this.repository.update(repositoryId, data);
      return result;
    } catch (err) {
      throw new Error("Error" + err);
    }
  }
}

module.exports = CrudService;
