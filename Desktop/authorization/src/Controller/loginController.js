const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const login = async function (req,res){

    // const id = req.params.userId
    
    try{
        const {emailId, password,} = req.body
        const fetchdata = await userModel.findOne({emailId:emailId , password:password})
        if(fetchdata==null) res.status(401).send("doesn't match the emailId and password with userdata")
        
        console.log("login Successfully")
        const myToken = jwt.sign({email:emailId,id:fetchdata._id},'passwordSignature')
        console.log(myToken)
        res.status(200).send({staus:true,data:myToken})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports.login = login