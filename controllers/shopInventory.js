require("module-alias/register");
const { Op } = require("sequelize");
const { Inventory } = require("@/models");

// add product to inventory db
const createInventory = async (req, res) => {
  try {
    // get data from body
    const {
      product_name,
      product_quantity,
      product_price,
      product_category,
      product_description,
    } = req.body;

    // create new product
    const inventory = await Inventory.create({
      product_name,
      product_quantity,
      product_price,
      product_category,
      product_description,
    });

    // send response
    res.status(201).json({
      status: "success",
      code: 201,
      message: "Product has been added",
      data: inventory,
    });
    return;
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

// get all products
const getAllInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findAll();
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        totalData: inventory.length,
        totalPrice: inventory.reduce(
          (acc, item) => acc + item.product_price,
          0
        ),
        inventory,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

// get product by id
const getInventoryById = async (req, res) => {
  try {
    const { product_id } = req.params;
    const inventory = await Inventory.findByPk(product_id);
    if (!inventory) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Product not found",
      });
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: inventory,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

// get product by name
const getInventoryByName = async (req, res) => {
  try {
    const { product_name } = req.params;

    if (!product_name) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "Product name is required",
      });
    }

    const inventory = await Inventory.findOne({
      where: {
        product_name: {
          [Op.like]: `%${product_name}%`,
        },
      },
    });

    if (!inventory) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: inventory,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

// get product by price and name query params
const getInventoryByPriceAndName = async (req, res) => {
  try {
    const { product_price, product_name } = req.query;

    if (!product_price && !product_name) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "Product price or name is required",
      });
    }

    let whereConditions = {};

    if (product_price) {
      whereConditions.product_price = {
        [Op.eq]: product_price,
      };
    }

    if (product_name) {
      whereConditions.product_name = {
        [Op.like]: `%${product_name}%`,
      };
    }

    const inventories = await Inventory.findAll({
      where: whereConditions,
    });

    if (inventories.length === 0) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "No products found with the specified criteria",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: inventories,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

// update product by id and return previous data
const updateInventory = async (req, res) => {
  try {
    const { product_id } = req.params;
    const {
      product_name,
      product_quantity,
      product_price,
      product_category,
      product_description,
    } = req.body;

    if (
      !product_name ||
      !product_quantity ||
      !product_price ||
      !product_category ||
      !product_description
    ) {
      return res.status(400).json({
        status: "failed",
        code: 400,
        message: "All fields are required",
      });
    }

    const inventory = await Inventory.findByPk(product_id);
    if (!inventory) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Product not found",
      });
    }

    // get previous data
    const previousData = { ...inventory.dataValues };

    inventory.product_name = product_name;
    inventory.product_quantity = product_quantity;
    inventory.product_price = product_price;
    inventory.product_category = product_category;
    inventory.product_description = product_description;

    await inventory.save();

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Product has been updated",
      data: {
        previousData: previousData,
        updatedData: inventory,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

// delete product by id
const deleteInventory = async (req, res) => {
  try {
    const { product_id } = req.params;
    const inventory = await Inventory.findByPk(product_id);
    if (!inventory) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Product not found",
      });
    }

    await inventory.destroy();

    res.status(200).json({
      status: "success",
      code: 200,
      message: "Product has been deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  createInventory,
  getAllInventory,
  getInventoryById,
  getInventoryByPriceAndName,
  getInventoryByName,
  updateInventory,
  deleteInventory,
};
