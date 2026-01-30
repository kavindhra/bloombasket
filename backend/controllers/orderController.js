const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  if (orderItems.length === 0) {
    return res.status(400).json("No items");
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    totalPrice
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

exports.getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all orders (for admin)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
