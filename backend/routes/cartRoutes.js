const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

// Add item to cart (protected)
router.post('/', protect, cartController.addToCart);

// View cart (protected)
router.get('/', protect, cartController.viewCart);

// Remove item from cart (protected)
router.delete('/:productId', protect, cartController.removeFromCart);

module.exports = router;