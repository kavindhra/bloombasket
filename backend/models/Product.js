const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  section: String,
  stock: Number,
  image: String,
  rating: Number,
  reviews: Number
});

module.exports = mongoose.model("Product", productSchema);
