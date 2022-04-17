const mongoose = require('mongoose');
const Product = mongoose.model('Product', require('../schema/productSchema'));
module.exports = Product;