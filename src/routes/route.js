const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newAuthorController =require('../controllers/newAuthorController')
const newBookController=require('../controllers/newBookVController')
const newPublisherController=require('../controllers/newPublisherController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


router.post('/newCreateAuthor',newAuthorController.newCreateAuthor)

router.post('/newCreateBook',newBookController.newCreateBook)
router.post('/newPublisher',newPublisherController.newPublisher)

router.get('/fetchbookdata',newBookController.fetchbookdata)

router.put('/update',newBookController.update)

// router.put('/priceupdate',newBookController.Priceupdate)

module.exports = router;