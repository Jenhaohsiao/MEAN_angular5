const express = require('express');
const mongoose = require('mongoose');
var multer = require('multer');
var path = require('path');
//this is demo!s
const router = express.Router();

const Rug = require('../models/rug');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({
    storage: storage
});

// connect to mongodb, UserName=jenhao; Password=jenhao
const db = "mongodb://jenhao:jenhao@ds147659.mlab.com:47659/turco_persian_rug"
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.error("Error!" + err);
    }
});

const rugsApi = '/rugs'

router.get(rugsApi, function (req, res) {
    Rug.find({})
        .exec(function (err, rugs) {
            if (err) {
                console.log("Error retrieving rugs");
            } else {
                res.json(rugs);
            }
        });
});

router.get(`${rugsApi}/:id`, function (req, res) {
    Rug.findById(req.params.id)
        .exec(function (err, rug) {
            if (err) {
                console.log("Error retrieving rug");
            } else {
                res.json(rug);
            }
        });
});

router.post(rugsApi, function (req, res) {
    var newRug = new Rug();
    newRug.name = req.body.name;
    newRug.price = req.body.price;
    newRug.serialNumber = req.body.serialNumber;
    newRug.save(function (err, insertedRug) {
        if (err) {
            console.log('Error saving Rug data');
        } else {
            res.json(insertedRug);
        }
    });
});

router.put(`${rugsApi}/:id`, function (req, res) {
    Rug.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                serialNumber: req.body.serialNumber
            }
        }, {
            new: true
        },
        function (err, updatedRug) {
            if (err) {
                res.send("Error with updating Rug");
            } else {
                res.json(updatedRug);
            }
        });
});

router.delete(`${rugsApi}/:id`, function (req, res) {
    Rug.findByIdAndRemove(req.params.id, function (err, deletedRug) {
        if (err) {
            res.send("Error with deleting Rug");
        } else {
            res.json(deletedRug);
        }
    });
});

router.post(`${rugsApi}/:id/upload`, upload.single("image"), function (req, res) {
    Rug.findByIdAndUpdate(req.params.id, {
            $set: {
                imagePath: `${req.file.filename}`
            }
        }, {
            new: false
        },
        function (err, uploadRug) {
            if (err) {
                res.send("Error with upload");
            } else {
                console.log('file', req.file);
                res.send(req.file);
            }
        });
});

module.exports = router;