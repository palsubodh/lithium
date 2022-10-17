const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('Respond : successful work on Postman!')
// });

// router.get('/students/', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Subodh', 'bhuvnesh', 'virat kohli']
//     res.send(students)
// })


// Example 1 for path params
//   ':' denotes that the following part of route is a variable
//     The value of this variable is what we are sending in the request url after /students
//     This value is set in the form of an object inside req.params
//     The object contain key value pairs
//     key is the variable in the route
//     value is whatever dynamic value sent in the request url
//       params attribute is fixed in a request object
//     params contains the path parameters object

// router.get('/students/:studentName', function(req, res){
  
//     let myParams = req.params

  
//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName )
// })

//Example 2 for path params
// router.get('/student-details/:name', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response for ' + studentName)
// })


// Ques 1
router.get('/movies',function(req,res){
  // console.log("Movie path params is movies",req.params)
  let moviesData = ["Pk","3 idiots","chhichhore","avengers","titianic"]
  
  res.send(moviesData)
})

// Ques 2
// router.get('/movies/:index',function(req,res){


//   let moviesCollection = ["Rang de basanti", "The shining", "Lord of the ring", "Batman begins"]

//   const Index = req.params.index
//   res.send(moviesCollection[Index])
  

// })

// ques 3  /

router.get('/movies/:index',function(req,res){


  let moviesCollection = ["Rang de basanti", "The shining", "Lord of the ring", "Batman begins"]

  const Index = req.params.index
  
  if(Index>=moviesCollection.length)

  {
    res.send("use a valid index ")
  }
 else{
  res.send(moviesCollection[Index])
 }

})



//ques 4

router.get('/films',function(req,res){
  let filmsData = [ 
  {
    id : 1,
  name : "The Shining"
   }, 
   {
    id: 2,
    name: "Incendies"
   }, 
   {
    id: 3,
    name: "Rang de Basanti"
   }, 
   {
    id: 4,
    name: "Finding Nemo"
   },
  {
    id:5,
    name : "chichore"
  }]
   
   res.send(filmsData)
})

// ques 5 
router.get('/films/:filmid',function(req,res){
  let filmsData = 
  [ 
  {
    id : 1,
  name : "The Shining"
   }, 
   {
    id: 2,
    name: "Incendies"
   }, 
   {
    id: 3,
    name: "Rang de Basanti"
   }, 
   {
    id: 4,
    name: "Finding Nemo"
   },
  {
    id:5,
    name : "chichore"
  }
]
   
   let Filmindex = req.params
  //  console.log(Filmindex)
   let count=0
   for(let i=0;i<filmsData.length;i++)
   {
       if(filmsData[i].id == Number(Filmindex.filmid))
       { 
          count++
          res.send(filmsData[i])
        }
      
   }
   if(count==0)
   {
      res.send("No movie exists with this id")
    
   }
   
   
})
module.exports = router;


