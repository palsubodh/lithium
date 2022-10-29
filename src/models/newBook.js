const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId
const newBookSchema = new mongoose.Schema( {
    name: String, 
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newAuthor",
        require:true
    },
    price:Number,
    ratings:Number,
    publisher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "newPublisher",
        required:true
    },
    isHardCover :{
        type:Boolean,
        default:false
    }



}, { timestamps: true });

module.exports = mongoose.model("NewBook",newBookSchema)