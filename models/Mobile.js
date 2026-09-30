const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mobileSchema = new Schema({
    modelName: { type: String, required: true },
    BrandName: { type: String, required: true },
    price: { type: Number, required: true },
    serialNo: { type: Number, required: true},
    ram: { type: Number, required: true },
    rom: { type: Number, required: true }
})
module.exports = mongoose.model('Mobile', mobileSchema)