
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Rug = require('../models/rug');

// connect to mongodb, UserName=jenhao; Password=jenhao
const db = "mongodb://jenhao:jenhao@ds147659.mlab.com:47659/turco_persian_rug"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!" + err);
    }
});

// fetch all rugs data from DB
router.get('/rugs',function(req,res){
    console.log('Get request for all rugs');
    Rug.find({})
    .exec(function(err, rugs){
        if (err){
            console.log("Error retrieving rugs");
        }else {
            res.json(rugs);
        }
    });
});

// fetch single rug data from DB
router.get('/rugs/:id',function(req,res){
    console.log('Get request for single rug');
    Rug.findById(req.params.id)
    .exec(function(err, rug){
        if (err){
            console.log("Error retrieving rug");
        }else {
            res.json(rug);
        }
    });
});



module.exports = router;
