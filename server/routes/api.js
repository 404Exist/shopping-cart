const express = require('express');
const Route = express();
const Product = require('../models/Product');
Route.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
})
Route.post('/products', (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(() => res.send(req.body))
    .catch(err => res.send({ error: err }));
})

Route.delete('/products/:id', async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
})
module.exports = Route;