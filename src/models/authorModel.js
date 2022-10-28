const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    author_Id:{type:Number,require:true},
    author_name:String,
    age:Number,
    address:String,
    summary:mongoose.Schema.Types.Mixed
})


module.exports=mongoose.model('author',authorSchema)
// module.exports.authorSchema=authorSchema
// module.exports.Book1Schema=Book1Schema
