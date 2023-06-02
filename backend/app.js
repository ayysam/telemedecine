// import express
const express = require('express'); 

//import body-parser
const bodyParser = require('body-parser');

//import mongoose 
const mongoose = require('mongoose');
const medicalForm = require('./models/medical-form');

// create express application
const app = express();

// const path = require('path'); 

// connect to DB and create one
mongoose.connect('mongodb://localhost:27017/dokotala'); 

//configuration de bodyParser
//parsing request from frontEnd
app.use(bodyParser.urlencoded({ extended: true }));
// JSON response
app.use(bodyParser.json());

//security configuration 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST,DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });
  //end security configuration 






  // Create a Server
  app.listen(3000, ()=> {
    console.log("APP is listening on Port 3000...");
});

//  Create a Server 2th way
// var server = app.listen(process.env.PORT || 3000, function () {

//   var host = server.address().address
//   var port = process.env.PORT || 3000;

//   console.log("App listening at http://%s:%s", host, port)
// })













  
  //importation de routes 
  userRouter = require('../backend/routes/users-routes');
  appointmentRouter = require('../backend/routes/appointment-routes');
  medicalFormRouter = require('../backend/routes/medicalForm-routes');
  //end imporation routes

  //dispatching to routes && appointment
  app.use('/users',userRouter);
  app.use('/appointment',appointmentRouter);
  app.use('/medicalForm',medicalFormRouter);
  // app.use('/images', express.static(path.join(__dirname, 'images')));

  module.exports = app;