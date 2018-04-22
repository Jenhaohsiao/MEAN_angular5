
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create Schema for urg 
const rugSchema = new Schema({
    name:String,
    price:String,
    serialNumber:String
});

//create model from the Schema, 'rugs' is the Collection name in mLab
module.exports = mongoose.model('rug', rugSchema, 'rugs');