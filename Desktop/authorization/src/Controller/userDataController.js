const userModel = require('../model/userModel')
const jwt = require('jsonwebtoken')

const getFetch = async function (req,res){
    // let header = req.header["x-auth-token"]
    try{
    const id=req.params.userId
    const fetchdata = await userModel.findById(id)
    if(!fetchdata)  res.status(401).send({status: false, msg:"invalid userId"})

    res.status(200).send(fetchdata)
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }

}

const getUpdate = async function (req,res){
    try{
    const id=req.params.userId
    const userauth = await userModel.findById(id)
    if(!userauth)  res.status(403).send({status:false,msg:"invalid userid"})

    const {lastName,age}=req.body
    const fetchdata = await userModel.findOneAndUpdate({_id:id},{lastName:lastName,age:age},{new:true})
    res.status(200).send(fetchdata)
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

const getDelete = async function (req,res){
    try{
    const id=req.params.userId
    const fetchdata = await userModel.findOneAndUpdate({_id:id},{isDeleted:true},{new:true})
    res.status(200).send(fetchdata)
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}


module.exports.getFetch= getFetch
module.exports.getUpdate= getUpdate
module.exports.getDelete= getDelete