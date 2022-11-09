const axios= require('axios')


let fetchmemes = async function(req,res){
    try{
        let options ={
            method:"post",
            url :`https://api.imgflip.com/get_memes`
        }
            let result = await axios(options)

            let data = result.data
            res.status(200).send({status:true,msg:data})
    } catch (err) {
        // console.log(err.message)
        res.status(500).send({ msg: err.message })
    }
}

let creatememes = async function(req,res){
    try{
        let template_id = req.query.template_id 
        let text0 = req.query.text0 
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options ={
            method:"post",
            url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
            let result = await axios(options)

            let data = result.data
            res.status(200).send({status:true,msg:data})
    }
    catch (err) {
        // console.log(err.message)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.fetchmemes=fetchmemes
module.exports.creatememes=creatememes











// let fetchmemesByid = async function(req,res){
//     try{
//         // let id = req.query.caption_image
//         let template_id= req.query.template_id
//         // let text0= req.query.text0
//         // let text1= req.query.text1
//         // let password=req.query.password
//         // let username=req.query.username
//         let options ={
//             method:"get",
//             // url :`https://api.imgflip.com/caption_image=${id}?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
//             url:`https://api.imgflip.com/caption_image?template_id=${template_id}`
//         }
//             let result = await axios(options)

//             let data = result.data
//             res.status(200).send({status:true,msg:data})
//     } catch (err) {
//         // console.log(err.message)
//         res.status(500).send({ msg: err.message })
//     }
// }





// module.exports.fetchmemesByid=fetchmemesByid