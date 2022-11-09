const express = require('express')

const router = express.Router()
const Cowincontroller = require("../Controller/CowinController")
const weatherController= require('../Controller/weatherController')
const memesController = require("../Controller/MemesController")



router.get("/getstates",Cowincontroller.getStates)
router.get("/getDistricts/:stateId",Cowincontroller.getDistricts)
router.get("/getByPin",Cowincontroller.getByPin)
router.put("/cowin/getOtp",Cowincontroller.getOtp)

router.get("/findyDistrictidanddate",Cowincontroller.findyDistrictidanddate)
router.get("/londonWeather",weatherController.londonWeather)
router.get("/onlylondonWeather",weatherController.onlylondonWeather)
router.get("/allcities",weatherController.allcities)

router.post("/fetchmemes",memesController.fetchmemes)
router.post("/creatememes",memesController.creatememes)


// router.post("/fetchmemesByid",memesController.fetchmemesByid)



module.exports=router