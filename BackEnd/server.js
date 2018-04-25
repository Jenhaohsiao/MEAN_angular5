const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./routes/api');

const port = 3000;
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/api', api);

app.listen(port, function () {
  console.log("Server running on localhost:" + port);
});