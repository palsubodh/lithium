// const orderController = require('../models/order')
// const UserModel= require("../models/userModel")


// const createOrder = async function (req,res)
// {
//     let data = req.body
//     let model = await orderController.create(data)
//     res.send({msg:model})
//     // let count=0
//     // let x=dataorder.userId
//     // if(x)
//     // {
//     //     const data=await UserModel.find()
        
//     //     data.forEach(el=>{
//     //       if(el._id==x)
//     //       {
//     //         count++
//     //       }
//     //     })
//     //     if(count==0) 
//     //     {
//     //         console.log("invalid userId")
//     //         res.send({msg:"invalid userId"})
            
//     //     }
//     //     else
//     //     {
//     //       console.log(" user id is valid and present ")  
//     //     }
//     // }
//     // else{
//     //     res.send({msg:"please enter userId-key"})
//     // }
//     // let model = await orderController.create(dataorder)
//     // res.send({msg:model})
// }

// module.exports.createOrder=createOrder



const orderModel = require('../models/order')
const userModel= require("../models/userModel")
const productSchema =require('../models/product')

const createOrder = async function(req,res){
    let data= req.body
    let count=0
    let count1=0
    let isFreeAppUser = req.isFreeAppUser
    if(data.userId){
        const userdata= await userModel.find()
        userdata.forEach(el =>{
            if(el._id==data.userId){
                count++
            }
        })
    }else{
        console.log("the required key of userId is not present")
        return res.send({msg:"the required key of userId is not present"})
    }
    if(data.productId){
        const productdata= await productSchema.find()
        productdata.forEach(el =>{
            if(el._id==data.productId){
                count1++
            }
        })
    }else{
        console.log("the required key of productId is not present")
        return  res.send({msg:"the required key of productId is not present"})
    }
    if(count==0 && count1>0){
        console.log("id is invalid for userId")
        res.send({msg:"id is invalid for userId"})
    }else if(count>0 && count1==0){
        console.log("id is invalid for productId")
        res.send({msg:"id is invalid for productId"})
    }else if(count==0 && count1==0){
        console.log("id is invalid for productId and userId key")
        res.send({msg:"id is invalid for productId and userId key"})
    }else{
        if(isFreeAppUser){
            data.amount=0
            data.isFreeAppUser=true 
            const fetchOrder= await orderModel.create(data)
            res.send({msg:fetchOrder})
        }else{
            data.isFreeAppUser=false
            const userfetch= await userModel.findOne({_id:data.userId})
            let userbal= userfetch.balance
            const productfetch= await productSchema.findOne({_id:data.productId})
            let prodprice= productfetch.price
            if(userbal>=prodprice){
            data.amount=prodprice
            let newbal= userbal - prodprice
            const userfetch= await userModel.findOneAndUpdate({_id:data.userId},{balance:newbal},{new:true})
            const fetchOrder= await orderModel.create(data)
            res.send({msg:fetchOrder})
            }
            else{
                console.log("doesn't have an enough balance in user collection")
                res.send({msg:"doesn't have an enough balance in user collection"})
            }
           
        }
        
    }
}

module.exports.createOrder = createOrder