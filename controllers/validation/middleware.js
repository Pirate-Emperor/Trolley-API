const joi = require("joi");
const { Inventory } = require("@/models");

const bodyValidation = (req, res, next) => {
  const schema = joi.object({
    product_name: joi.string().min(3).required(),
    product_quantity: joi.number().min(1).required(),
    product_price: joi.number().min(1).required(),
    product_category: joi.string().required(),
    product_description: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "failed",
      code: 400,
      message: error.details[0].message,
    });
  }

  next();
};

const checkDuplicate = async (req, res, next) => {
  const { product_name } = req.body;
  try {
    const product = await Inventory.findOne({ where: { product_name } });
    if (product) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "Product already exists",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  bodyValidation,
  checkDuplicate,
};
