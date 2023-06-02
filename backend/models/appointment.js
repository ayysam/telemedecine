const mongoose = require('mongoose'); 

const appointementSchema = mongoose.Schema({
    idUser : String,
    idDoctor : String,
    nameUser : String,
    nameDoctor : String,
    date : Date, 
    hour : String,
    message : String,
    state : String,
    message : String
});

// create user model 
const appointment = mongoose.model('appointment',appointementSchema);


//make the model exportable
module.exports = appointment;
