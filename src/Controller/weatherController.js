const axios = require('axios')

// const key = "9802dee3e09a3c1541010fb5c03399a3"
// http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}` 


let londonWeather = async function(req,res)
{
   try{
        let q = req.query.q
        let key = req.query.appid
        let options ={
            method :"get",
            url :`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})
   }
   catch (err) {
    // console.log(err.message)
    res.status(500).send({ msg: err.message })
}
}





let onlylondonWeather = async function(req,res)
{
   try{
        
        let key = req.query.appid
        let options ={
            method :"get",
            url :`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})
   }
   catch (err) {
    // console.log(err.message)
    res.status(500).send({ msg: err.message })
}
}


let allcities = async function(req,res)
{
    let cities =[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    
    try{
        let arr=[]
        for(let i=0;i<cities.length;i++)
         {
            let q = cities[i]
            let key = req.query.appid
            let options ={
                method :"get",
                url :`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}`
                }
        let result = await axios(options)
              arr.push({city:result.data.name,temp:result.data.main.temp})  
            
        }
        arr.sort((a,b)=>{return a.temp-b.temp})
        res.status(200).send({status:true,msg:arr})
        
   }
    catch (err) {
    // console.log(err.message)
    res.status(500).send({ msg: err.message })
}
}


module.exports.londonWeather=londonWeather
module.exports.onlylondonWeather=onlylondonWeather
module.exports.allcities=allcities