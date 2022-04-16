const mongoose = require('mongoose');
const productShema = new mongoose.Schema({
  id: String,
  title: String,
  imageUrl: String,
  desc: String,
  price: Number,
  sizes: [String],
});
module.exports = productShema;