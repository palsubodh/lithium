const {isValidObjectId} = require("mongoose")



const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const myMiddleware = function(req, res, next){
    req.month = "November"
    console.log('I am inside a middleware!',req.month)
    next()
}

const myOtherMiddleware = function(req, res, next){
       let header =req.headers.isfreeappuser
        const newHeader = header=="true" ? true :false
        const isFreeAppUser = req.isFreeAppUser=newHeader
        
       if(header)
       {
        console.log("your header is added successfully")
        next()
       }
       else
       {
        console.log("set your header isfreeappuser is required")
        res.send({headermsg:"request is missing a mandatory header"})
       }
       
    } 

    // const valid = function(req,res,next)
    // {
    //     let UserID = req.body.userId
    //     let ProductId=req.body.productId
    //     if(!isValidObjectId(UserID))
    //     {
    //         return res.send({msg:"not a valid userId"})
    //     }
    //     if(!isValidObjectId(ProductId)){
    //         return res.send({msg:"not a valid productId"})
    //     }
    //     next()
    // }



    // Setting an attribute 'wantsJson' in request
    // The header value comparison is done once and
    // the result can be used directly wherever required.
    // let acceptHeaderValue = req.headers["isfreeappuser"]

    // if(acceptHeaderValue == "application/json") {
    //     req.wantsJson = true
    // } else {
    //     req.wantsJson = false
    // }
    // next()


module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.myMiddleware = myMiddleware
module.exports.myOtherMiddleware = myOtherMiddleware
// module.exports.valid=valid
