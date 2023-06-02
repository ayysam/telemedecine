// import express

const express = require('express');
const router = express.Router();

const user = require('../models/user');

// const multer = require('../middleware/multer-config');

router.post("/signup",  (req, res) => {

  console.log('here into signUp business logic', req.body);
  userObj = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
    about : req.body.about,
    telephone: req.body.tel,
    adress: req.body.adress,
    location: req.body.location,
    role: req.body.role,
    speciality: req.body.speciality,

  });
  userObj.save().then(
    (result) => {
      if (result) {
        res.json({ result: "user added succefully" })
      }
      else {
        console("error! here error", err)
      }
    });

});

router.get('/getAllUsers', (req, res) => {
  console.log('here into getAllUsers');
  user.find((err, result) => {
    if (err) {
      console.log('error', err)
    }
    else {
      console.log(result)
      res.json({ users: result })
    }
  });
});

router.get('/getUsers', (req, res) => {
  let users = []
  console.log('here into get only users');
  user.find((err, result) => {
    if (err) {
      console.log('error', err)
    }
    else {
      for (let i = 0; i < result.length; i++) {
        if (result[i].role == "User") {
          users.push(result[i]);
        }
      }
      res.json({ result: users })
    }
  });
});

router.get('/getDoctors', (req, res) => {
  let doctors = []
  console.log('here into get only doctors');
  user.find((err, result) => {
    if (err) {
      console.log('error', err)
    }
    else {
      for (let i = 0; i < result.length; i++) {
        if (result[i].role == "Doctor") {
          doctors.push(result[i]);
        }
      }
      res.json({ result: doctors })
    }
  });
});



router.get('/:id', (req, res) => {
  console.log('here into get user by id');
  console.log("here id to search",req.params.id);
  user.findOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.json({ result: result })
      }
    });
});

router.put("/:id", (req, res) => {
  console.log('here into update user');
  user.updateOne({ _id: req.params.id }, req.body).then(
    (result) => {
      if (result) {
        res.json({ result: "update done" })
      }
    });

});

router.delete("/:id", (req, res) => {
  console.log('here into delete user');
  user.deleteOne({ _id: req.params.id }, (result, error) => {
    if (result) {
      res.json({ result: "deleted done" })

    }
  })

});


router.post("/login", (req, res) => {
  console.log('here into login user');
  user.findOne({ email: req.body.email, password: req.body.password }).then(
    (result) => {
      if (result) {
        res.json({ result: result })
        console.log(result)
      }
      else {
        res.json({ result: false })
        console.log(error)
      }
    });
});

router.get("/search3/:gov/:spec",(req,res)=>{
  console.log("here into search doctor")
  console.log(req.params.spec)
  console.log(req.params.gov)

  user.find({ speciality: req.params.spec , location: req.params.gov }).then(
    (result) => {
      if (result) {
        res.json({ res : result })
        console.log(result)
      }
      else{
        res.json({ res : "false" })
      } 
    });
});

router.get("/search1/:gov",(req,res)=>{
  console.log("here into search doctor by gov")
  console.log("here governorate to search",req.params.gov)
  user.find({location: req.params.gov}).then(
    (result) => {
      if (result) {
        res.json({ res : result })
        console.log("here doctors in ariana",result)
      }
    
    });
});

router.get("/search2/:spec",(req,res)=>{
  console.log("here into search doctor by spec")
  console.log("here speciality to search,",req.params.spec)
  user.find({speciality: req.params.spec}).then(
    (result) => {
      if (result) {
        res.json({ res : result })
        console.log(result)
      }
     
    });
});

// router.post("/api/addX", multer({ storage: storage }).single('img'), (req, res) => {
//   console.log('file', req.file);
//    url = req.protocol + '://' + req.get('host');
//    img = url + '/images/' + req.file.filename


// });


module.exports = router;