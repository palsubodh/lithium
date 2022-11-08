const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");



const createUser = async function (req, res) {
  
  try{
  const data= req.body
  const model = await userModel.create(data)
  res.status(200).send({msg:model})
  }
  catch(err){
    res.status(500).send({status:false,msg:err.message})
}

};

module.exports.createUser = createUser;
