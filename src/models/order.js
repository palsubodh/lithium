const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:{type:Date},
    
  
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 