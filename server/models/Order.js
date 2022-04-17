const mongoose = require('mongoose');
const Order = mongoose.model("Order", require("../schema/orderSchema"));
module.exports = Order;