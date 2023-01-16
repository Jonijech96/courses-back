const CategoryServices = require("../services/categories.services");

const createCategory = async (req, res) => {
  try {
    const newCategory = req.params;
    const result = await CategoryServices.create(newCategory);
  } catch (error) {
    throw error;
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await CategoryServices.delete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { createCategory, deleteCategory };
