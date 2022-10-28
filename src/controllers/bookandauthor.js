const auhtorModel= require('../models/authorModel')
const Book1Model = require('../models/Book1Model')


const Book1data = async function(req,res){
    let data= req.body
    let books = await Book1Model.create(data)
    res.send({msg:books})
}
const authordata = async function(req,res){
    let data= req.body
    let authordata = await auhtorModel.create(data) 
    res.send({msg:authordata})
}

const filterbydata=async function(req,res){
    let author = await auhtorModel.findOne({author_name:"Chetan bhagat"})
    let author_Id = author.author_Id
    let books = await Book1Model.find({author_Id:author_Id})
    // for(let i=0;i<books.length;i++)
    // {
    //     console.log(books[i].name)
    // }
    console.log(books)
    // res.send({msg:author_Id})
    res.send({msg:books})
}

const updateBooks= async function (req, res) {
  
    let updateBooks= await Book1Model.findOneAndUpdate( 
        { name: "Two states"} ,                         //condition
        { $set: {price:100} },                          //update in data
        { new: true }                                   // new: true - will give you back the updated document //
                                                // Upsert: it finds and updates the document but if the doc is not found(i.e
                                                     // it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     let authorname= await auhtorModel.findOne({author_Id:updateBooks.author_Id})
     
     res.send( { msg: updateBooks.price,res:authorname.author_name})

}
const findbyprice= async function(req,res){
    let finddata = await Book1Model.find({ price : { $gte: 50, $lte: 100}})
    let arr=[]

    for(let i=0;i<finddata.length;i++)
    {
        let id=finddata[i].author_Id
        let authorName = await auhtorModel.findOne({author_Id:id}).select({author_name:1,author_Id:1,_id:0})
        arr.push(authorName)
    }
    // console.log(finddata)
    // res.send(finddata)
    res.send({msg:arr})
}

module.exports.Book1data=Book1data
module.exports.authordata=authordata
module.exports.filterbydata=filterbydata
module.exports.updateBooks=updateBooks
module.exports.findbyprice=findbyprice