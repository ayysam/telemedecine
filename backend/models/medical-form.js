const mongoose = require('mongoose'); 

const medicalFormSchema = mongoose.Schema({
    idUser : String,
    idDoctor : String,
    idAppointment : String,
    height : Number,
    weight : Number,
    dateOfBirth : String,
    sex : String,
    text1 : String,
    text2 : String, 
    text3 : String,
});

// create user model 
const medicalForm = mongoose.model('medicalForm',medicalFormSchema);


//make the model exportable
module.exports = medicalForm;
