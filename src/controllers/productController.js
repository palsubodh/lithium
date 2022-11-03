const ProductController = require('../models/product')

const createProduct = async function(req,res)
{
    let data = req.body
    let model = await ProductController.create(data)
    res.send({productData:model})

}

module.exports.createProduct=createProduct