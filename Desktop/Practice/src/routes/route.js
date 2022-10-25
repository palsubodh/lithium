const express = require('express')
const router = express.Router()
const userSchema =require('../schema/models')
const userController =require('../Controller/Usercontroller')


router.post('/createuser',userController.createuser)
router.get('/getuser',userController.getuser)

module.exports =router