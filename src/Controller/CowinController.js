let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin= async function(req,res){

    try{
        let pin = req.query.pincode
        let date = req.query.date

        let result = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}
        `)
        let data = result.data
        res.status(200).send({data:data})
    }
    catch(err){
        console.log(err.message)
        res.send({status:false,msg:err})
    }
}


let getOtp = async function (req, res) {
    try {
        let mobile = req.body
        
        // console.log(`body is : ${mobile} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: mobile
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let findyDistrictidanddate = async function(req,res)
{
    try{
        let disId= req.query.district_id 
        let date = req.query.date

        var options ={
            method:"get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${disId}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates=getStates
module.exports.getDistricts=getDistricts
module.exports.getByPin=getByPin
module.exports.getOtp=getOtp
module.exports.findyDistrictidanddate=findyDistrictidanddate