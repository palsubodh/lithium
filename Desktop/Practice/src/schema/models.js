const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    
    bookName:String,
    authorName:String,
    category:String,
    year:String,
    mobile:{
        type:String,
        unique:true,
        require:true,
    }

},{timestamps:true})

module.exports = mongoose.model('User', bookSchema)