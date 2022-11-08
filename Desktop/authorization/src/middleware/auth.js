const jwt= require('jsonwebtoken')

const auth =async function (req, res, next){


    try{
        const header = req.headers["x-auth-token"]
  
    if(header){
        const decoded = await jwt.verify(header,'passwordSignature')
        // console.log(decoded)
        req.id=decoded

        if(!decoded)  
        {
            return res.status(401).send({status:false, msg:"invalid token"}) 
        }
        next()
    }
    else{
        // console.log("x-auth-token key is required in headers")
        res.status(401).send({msg:"x-auth-token key is required in headers"})
    }
    }

    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
   
}


module.exports.auth =auth