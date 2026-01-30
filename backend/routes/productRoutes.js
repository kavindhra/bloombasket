const express = require("express");
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get product by ID
router.get("/:id", getProductById);

// Create a new product (admin only)
router.post("/", protect, admin, addProduct);

// Update a product (admin only)
router.put("/:id", protect, admin, updateProduct);

// Delete a product (admin only)
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;

