const jwt = require("jsonwebtoken");



const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"]
    console.log(token)
    let checkToken= jwt.verify(token,"sp@12345")

    if(checkToken)
    {
        req.checkToken=checkToken
        next()
    }
    else
    {
        res.send({status:false,msg:"invalid token"})
    }
    
}


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }

module.exports.authenticate=authenticate