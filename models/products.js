const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
  ProductName: String,
  ProductID: Number,
  CategoryID: Number,
  Category: String,
  About: String,
  Images: String,
  price: Number
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;

//product_id, product_name, category_id 