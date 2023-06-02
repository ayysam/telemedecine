const express = require('express');
const app = require('../app');

const router = express.Router();


const medicalForm = require('../models/medical-form');

//traitement


router.post("/save", (req,res)=> {
    console.log("here into save medical form");
    console.log(req.body);

    medicalFormObj = new medicalForm({
        idUser : req.body.idUser,
        idDoctor : req.body.idDoctor,
        idAppointment : req.body.idAppointment,
        height : req.body.height,
        weight : req.body.weight,
        dateOfBirth : req.body.dateOfBirth,
        sex : req.body.sex,
        text1 : req.body.obj1,
        text2 : req.body.obj2,
        text3 : req.body.obj3,
    });

    medicalFormObj.save().then(
        (result) => {
            if (result) {
                res.json( {result : result} )
            }
            else {
                console("error! here error", err)
            }
        });

})

router.get("/getByAppoId/:idAppo", (req,res)=>{
    console.log("here id appointment",req.params.idAppo);
    console.log("here into get get medical form by appo id");
    medicalForm.find({idAppointment : req.params.idAppo}).then(
        (result)=>{
            if(result) {
                res.json({result : result})
                console.log(result);
            }
        });
});

router.delete("/:idAppo" , (req,res)=>{
    console.log("here into delete medical form");
    console.log("here id appointment to delete",req.params.idAppo);
    medicalForm.deleteOne({idAppointment : req.params.idAppo}).then(
        (result)=>{
            if(result) {
                res.json({result : "medical form deleted"})
                console.log(result);
            }
        });
})



















module.exports = router;