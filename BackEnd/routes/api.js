
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

//Insert new data into DB
router.post('/rug', function(req,res){
    console.log('Post a Rug data');
    var newRug = new Rug();
    newRug.name = req.body.name;
    newRug.price = req.body.price;
    newRug.serialNumber = req.body.serialNumber;
    newRug.save(function(err, insertedRug){
        if(err){
            console.log('Error saving Rug data');
        } else {
            res.json(insertedRug);
        }
    });
});

// update data in Mongodb
router.put('/rug/:id', function(req, res){
    console.log('update a Rug data');
    Rug.findByIdAndUpdate(req.params.id,
    {
        $set: {name: req.body.name,
            price:req.body.price, 
            serialNumber:req.body.serialNumber }
    },
    {
        new: true
    },
    function(err, updatedRug){
        if(err){
            res.send("Error with updating Rug");
        } else {
            res.json(updatedRug);
        }
    }); 
});



module.exports = router;
