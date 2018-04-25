const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// API Routes
const api = require('../BackEnd/routes/api');

// LocalHost Port
const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// parse the text as Url encoded data
app.use(bodyParser.urlencoded({extended: true}));
// parse the text as Json
app.use(bodyParser.json());

app.use('/api', api);

// Listen to request on port 3000
app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
