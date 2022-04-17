const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/shopping-cart';
const dbConnect = () => {
  mongoose.connect(connectionString, { 
    useNewUrlParser: true, useUnifiedTopology: true 
  }).then(() => console.log("connected successfully")).catch(err => console.log(err));
}
module.exports = dbConnect;