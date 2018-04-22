
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// connect to mongodb, UserName=jenhao; Password=jenhao
const db = "mongodb://jenhao:jenhao@ds147659.mlab.com:47659/turco_persian_rug"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!" + err);
    }
});


router.get('/',function(req,res){
    res.send('api works1');
});

module.exports = router;
