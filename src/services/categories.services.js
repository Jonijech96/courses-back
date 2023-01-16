const Categories = require("../models/categories.models");

class CategoryServices {
  static async create(category) {
    try {
      const result = Categories.create(category);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Categories.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoryServices;
