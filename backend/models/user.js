//import mongoose 
const mongoose = require('mongoose');


// create user schema first 
const userSchema = mongoose.Schema({
    firstName : String , 
    lastName : String , 
    email : String , 
    location : String,
    about : String,
    password : String,
    dateOfBirth : Date,
    telephone : Number ,
    role : String,
    speciality : String,
    adress : String,
    imageUrl : String
    
});


// create user model 
const user = mongoose.model('user',userSchema);


//make the model exportable
module.exports = user;

