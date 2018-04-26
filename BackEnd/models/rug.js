const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rugSchema = new Schema({
    name: String,
    price: Number,
    serialNumber: String,
    imagePath: String
});

module.exports = mongoose.model('rug', rugSchema, 'rugs');