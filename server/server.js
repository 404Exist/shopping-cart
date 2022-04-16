const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use('/api', require('./routes/api'));

const connectionString = 'mongodb://localhost/shopping-cart';
mongoose.connect(connectionString, { 
  useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log("connected successfully")).catch(err => console.log(err));



app.listen(5000, () => {
  console.log("server running !!");
})