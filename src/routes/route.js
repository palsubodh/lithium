const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



// router.get("/getUsersData", BookController.getUsersData)


router.post("/createBook", BookController.createBook  )

router.get("/booklist", BookController.bookList)
router.post("/getBooksInYear",BookController.getBooksInYear)
router.get("/getParticularBooks",BookController.getParticularBooks)
router.get("/getXINRBooks",BookController.getXINRBooks)
router.get("/getRandomBooks",BookController.randombooks)

module.exports = router;