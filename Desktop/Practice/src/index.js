const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://palsubodh:Palsubodh@cluster0.mhegah9.mongodb.net/Subodh9818-DB',{useNewUrlParser:true})
.then(()=>console.log("Subodh Mongoose is connected")).catch(err=>console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',route)

app.listen(process.env.PORT || 3000 ,function(){
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});