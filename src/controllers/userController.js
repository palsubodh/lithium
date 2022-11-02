const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "successful"})
    }
const test1 = async function(req,res)
{
    console.log("test1 successfull run")
    res.send({msg:"test1 successful run"})
}

const test2 = async function(req,res)
{
    console.log("test2 successfull run")
    res.send({msg:"test2 successful run"})
}

   















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.test1=test1
module.exports.test2=test2