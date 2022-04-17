const express = require('express');
const Route = express();
// Product Routes
const Product = require('../models/Product');
Route.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
})
Route.post('/products', (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(() => res.send(product))
    .catch(err => res.send({ error: err }));
})
Route.delete('/products/:id', async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
})

// Order Routes
const Order = require('../models/Order');
Route.get('/orders', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
})
Route.post('/orders', async (req, res) => {
  const order = await new Order(req.body);
  order.save()
    .then(() => res.send(order))
    .catch(err => res.send({ error: err }));
})
Route.delete('/orders/:id', async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.send(deletedOrder);
})
module.exports = Route;