const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// API Routes
const api = require('../BackEnd/routes/api');

// LocalHost Port
const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

// parse the text as Url encoded data
app.use(bodyParser.urlencoded({extended: true}));
// parse the text as Json
app.use(bodyParser.json());

app.use('/api', api);

// Get for any matching path. send HTML in the distributable folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Listen to request on port 3000
app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
