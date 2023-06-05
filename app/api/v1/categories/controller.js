const Categories = require("./model");
const {
  getAllCategories,
  createCategories,
  getCategoryById,
} = require("../../../services/mongoose/categories");

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (_, res, next) => {
  try {
    const result = await getAllCategories();
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getCategoryById(req);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const result = await Categories.findByIdAndUpdate(
      { _id: id },
      { name },
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Categories.findByIdAndRemove(id);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
  find,
  update,
  destroy,
};
