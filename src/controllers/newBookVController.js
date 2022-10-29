
const newAuthor = require('../models/newAuthor')
const newBookModel = require('../models/newBook')
const newPublisherModel = require('../models/newPublisher')

const newCreateBook= async function (req, res) {
    
    let author = req.body
    if(!author.author_id)
    {
        console.log("auhtor id is required")
        res.send("auhtor id is required")
    }
    else if(!author.publisher)
    {
        console.log("Publisher id is required")
        res.send("Publisher id is required")   
    }
    else
    {
        let data = await newAuthor.find()
        var count=0
        data.forEach(el =>{
            if(el._id==author.author_id)
            {
                count++
            }
            
        })

        let publisherdata= await newPublisherModel.find()
        var count1=0
        publisherdata.forEach(el =>{
            if(el._id==author.publisher)
            {
                count1++
            }
            
        })


        if(count>0 && count1>0)
        {
            let authorCreated = await newBookModel.create(author)
            res.send({data: authorCreated})
        }
        else if(count==0 && count1>0)
        {
            console.log("auhtor id is not valid")
            res.send("auhtor id is not valid")
        }
        else if(count>0 && count1==0)
        {
            console.log("publisher id is not valid")
            res.send("publisher id is not valid")
        }
        else
        {
            console.log("auhtor and publisher id is not valid")
            res.send("auhtor and publisher id is not valid")
        }
        
    }
    
    
}

const fetchbookdata= async function(req,res){
    let data = await newBookModel.find().populate("author_id").populate("publisher")
    res.send({msg:data})
}

const update =async function(req,res){
    let data = await newBookModel.find().populate("author_id").populate("publisher")

    data.forEach(el=>{
        if(el.publisher.name=='Penguin' || el.publisher.name=='HarperCollins')
        {
            el.isHardCover = true
            
            
        }
        if(el.ratings>3.5)
            {
                el.price=el.price+10
            }
        
    })

    
    res.send({msg:data})
}

// const Priceupdate = async function(req,res){
//     let data = await newBookModel.find().populate("author_id")
    
//     data.forEach(el=>{
//         if(el.ratings>3.5)
//         {
//             el.price=el.price+10
//         }
//     })
//     res.send({msg:data})
// }


module.exports.newCreateBook=newCreateBook
module.exports.fetchbookdata=fetchbookdata
module.exports.update=update
// module.exports.Priceupdate=Priceupdate