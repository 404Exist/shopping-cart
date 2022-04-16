const mongoose = require('mongoose');
const productShema = require('../schema/productSchema');
const Product = mongoose.model('Product', productShema);
module.exports = Product;