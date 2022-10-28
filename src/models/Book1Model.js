const mongoose = require('mongoose');


const Book1Schema = new mongoose.Schema({
    name:String,
    author_Id:{type:Number,require:true},
    price:Number,
    rating:Number,


})
module.exports = mongoose.model('Book1', Book1Schema)