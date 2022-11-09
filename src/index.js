const express = require('express')
const bodyParser = require('body-parser')
const{default:mongoose} = require('mongoose')
const route = require('./routes/route')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())



app.use('/',route)

app.listen(3000,function(){
    console.log("ALL IS WELL")
})