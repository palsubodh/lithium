const mongoose = require('mongoose');
const newAuthor = new mongoose.Schema( {
    name: String, 
    age:Number,
    address:String,
    ratings: Number


}, { timestamps: true });

module.exports = mongoose.model("newAuthor",newAuthor)