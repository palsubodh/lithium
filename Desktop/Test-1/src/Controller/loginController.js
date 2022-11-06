const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const login = async function (req,res){

    // const id = req.params.userId
    
    const {emailId, password,} = req.body
    const fetchdata = await userModel.findOne({emailId:emailId , password:password})
    if(fetchdata==null) res.send("doesn't match the emailId and password with userdata")
    
    console.log("login Successfully")
    const myToken = jwt.sign({email:emailId,id:fetchdata._id},'passwordSignature')
    console.log(myToken)
    res.send({staus:true,data:myToken})
}

module.exports.login = login