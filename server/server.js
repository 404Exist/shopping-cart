const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use('/api', require('./routes/api'));

require('./config/db')();

app.listen(5000, () => {
  console.log("server running !!");
})