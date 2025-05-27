const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String }
});

const ProductModel= mongoose.model('Products', ProductSchema);

// models/Product.js
module.exports = mongoose.model('Product', ProductSchema); // Singular 'Product'