const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const Logger = require('../logger')
const LoGGer = require('../logger/logger')
const formatter = require('../validator/formatter')
const helper = require('../util/helper')

// enternal module // inbuilt
const lodash = require('lodash')

//importing external package
const underscore = require('underscore');
const { log } = require('console');

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",Logger.printSomething())
    console.log("The value of the constant is ",Logger.Url)
    console.log("The logger module 1",LoGGer.welcome())

    // lowercase string module
 console.log("String is converted to lowercase ",formatter.getlowercase());
    //uppercase string module
    console.log("String is converted in uppercase",formatter.getuppercase())

    // for trim
                console.log("Trim sting is here",formatter.gettrim())
    //Trying to use an external package called underscore
    //print first element array
    let myfriends = ['Subodh', 'Praveen', 'Rupesh',"Vikas"]
    let result = underscore.first(myfriends)
    console.log("The result of underscores examples api is : ", result)

    //last element of array by using external library
    let result1=underscore.last(myfriends)
    console.log("last name of name friend :",result1)

    // module 3 solution
    console.log("module3 solution is here",helper.result)
    console.log("Today date is",helper.gettoday())
    console.log("month is",helper.getMonth())
   
    // Ques 4 using lodash
    let monthsname = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]

 
    let result2=lodash.chunk(monthsname,4)
    console.log(result2);

    // using tail 

    let oddnum =[1,3,5,7,9,11,13,15,17,19]

    let oddres= lodash.tail(oddnum)
    console.log(oddres)

    // using union

    let commonnum = [1,4,5,4,5]

    let rescommon = lodash.union(commonnum)
    console.log(rescommon)

    // using frompairs

  let data = [  ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

  let resdata= lodash.fromPairs(data)
  console.log(resdata)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

