const Categories = require("../../api/v1/categories/model");

const { NotFoundError, BadRequestError } = require("../../errors/index");



const createCategories = async (req) => {
  const { name } = req.body;
  const result = await Categories.create({ name });
  const check = await Categories.findOne({ name });
  if (check) throw new BadRequestError("Kategori Nama Duplikat");
  return result;
};

const getAllCategories = async () => {
  const result = await Categories.find();
  return result;
};

const getCategoryById = async (req) => {
  const { id } = req.params;
  const result = await Categories.findOne({ _id: id });
  return result;
};

module.exports = {
  getAllCategories,
  createCategories,
  getCategoryById,
};
