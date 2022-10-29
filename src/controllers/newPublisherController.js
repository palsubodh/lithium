const newPublisherModel = require('../models/newPublisher')

const newPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await newPublisherModel.create(author)
    res.send({data: authorCreated})
}


module.exports.newPublisher=newPublisher