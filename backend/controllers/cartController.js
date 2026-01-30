const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add item to cart
exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user._id;
    try {
        // Check if cart exists for the user
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            // Create a new cart if it doesn't exist
            cart = new Cart({
                userId,
                items: [{ productId, quantity }]
            });
        } else {
            // Check if product already exists in cart
            const existingItem = cart.items.find(item => item.productId.toString() === productId);

            if (existingItem) {
                // Update quantity if product already exists
                existingItem.quantity += quantity;
            } else {
                // Add new product to cart
                cart.items.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(201).json({ message: 'Item added to cart', cart });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// View cart
exports.viewCart = async (req, res) => {
    const userId = req.user._id;
    try {
        // Retrieve cart items for the user
        const cart = await Cart.findOne({ userId }).populate('items.productId');

        if (!cart) {
            return res.json({ items: [] });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;
    try {
        // Find and update cart to remove item
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Remove the item from cart
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);

        await cart.save();
        res.json({ message: 'Item removed from cart', cart });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
