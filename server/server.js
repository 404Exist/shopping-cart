const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use('/api', require('./routes/api'));
app.use('/', express.static('public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

require('./config/db')();

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
})