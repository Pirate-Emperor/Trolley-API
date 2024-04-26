const express = require("express");
const router = express.Router();
const {
  bodyValidation,
  checkDuplicate,
} = require("@/controllers/validation/middleware");
const {
  createInventory,
  getAllInventory,
  getInventoryById,
  getInventoryByPriceAndName,
  getInventoryByName,
  updateInventory,
  deleteInventory,
} = require("@/controllers/shopInventory");

// [POST] /shop/inventory
router.post("/inventory", bodyValidation, checkDuplicate, createInventory);

// [GET] /shop/inventory/all
router.get("/inventory/all", getAllInventory);

// [GET] /shop/inventory/:id
router.get("/inventory/:product_id", getInventoryById);

// [GET] /shop/inventory?price=
router.get("/inventory", getInventoryByPriceAndName);

// [GET] /shop/inventory/name/:name
router.get("/inventory/name/:product_name", getInventoryByName);

// [PUT] /shop/inventory/:id
router.put("/inventory/:product_id", bodyValidation, updateInventory);

// [DELETE] /shop/inventory/:id
router.delete("/inventory/:product_id", deleteInventory);

module.exports = router;
