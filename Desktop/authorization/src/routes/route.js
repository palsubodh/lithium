const express=require('express')

const router = express.Router()

const userController= require("../Controller/userController")
const loginController = require("../Controller/loginController")
const userdataController = require('../Controller/userDataController')
const auths =require('../middleware/auth')
const authorizations = require('../middleware/authorization')


router.post("/users", userController.createUser  )

router.post("/login", loginController.login)

router.get('/users/:userId',auths.auth, authorizations.authorization, userdataController.getFetch)

router.put('/users/:userId',auths.auth,authorizations.authorization, userdataController.getUpdate)

router.delete('/users/:userId',auths.auth,authorizations.authorization, userdataController.getDelete)


module.exports = router;