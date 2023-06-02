const express = require('express');

const router = express.Router();


const appointment = require('../models/appointment');
const user = require('../models/user')

router.post("/", (req, res) => {
    console.log("here into add appointment", req.body)

    appointmentObj = new appointment({
        idUser: req.body._id,
        idDoctor: req.body.idDoctor,
        nameUser: req.body.firstName,
        nameDoctor: req.body.nameDoctor,
        date: req.body.date,
        hour: req.body.hour,
        message: req.body.message,
        state: req.body.state

    });
    appointmentObj.save().then(
        (result) => {
            if (result) {
                res.json( result  )
            }
            else {
                console("error! here error", err)
            }
        });

});

router.get("/", (req, res) => {
    console.log("here into get all appointments");
    appointment.find((err, result) => {
        if (err) {
            console.log('error', err)
        }
        else {
            console.log(result)
            res.json({ result: result })
        }
    });

});

router.get("/:id", (req, res) => {
    console.log("here into get appointment by id")
    console.log(req.params.id)
    appointment.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.json({ result: result })
            }
        }
    )
})

router.put("/accept/:id", (req, res) => {
    console.log("here into accept appointment");
    appointment.updateOne({ _id: req.params.id }, { $set: { state: "accepted" } }).then(

        (result) => {
            if (result) {
                res.json({ result: "appointment accepted" })
            }
        });
});

router.delete("/:id", (req, res) => {
    console.log("here into refuse appointment");
    appointment.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.json({ result: "appointment deleted" })
            }

        });

});

// router.put("/:id", (req, res) => {

//     console.log('here into edit appointment');
//     console.log("here new values",req.body);
//     console.log("here id to update",req.params.id);
//     appointment.updateOne({_id:req.params.id},req.body).then(
//         (res)=>{
//             if(res){
                
//             }
//         }
//     )

// })


// OLD UPDATE
router.put("/:id", (req, res) => {

    console.log('here into edit appointment');
    console.log("here new values",req.body);
    console.log("here id to update",req.params.id);

    appointment.updateOne({ _id: req.params.id }, {
        $set:
        {
            hour: req.body.hour,
            state: "being processed"
        }
    }).then(

        (result) => {
            if (result) {
                res.json({ result: "appointment changed" })
            }
        });
});







router.put("/:id",(req,res) => {
    console.log("here into decline appointment");
    // 
    // 
    // 
    // 
})

router.get("/getAppoUser/:idUser/:idDoctor" , (req,res)=> {
    console.log("here into get appoUser");
    
    appointment.findOne({IdUser : req.params.idUser , IdDoctor : req.params.idDoctor}).then(
        (result)=> {
            if(result) {
                res.json({result : result})
            }
        }
    )
   

})

router.get("/getAppoDoctor/:id" , (req,res)=> {
    console.log("here into get appo doctor");
    console.log(req.params.id);
    appointment.find({idDoctor : req.params.id}).then(
        (result)=>{
            if (result) {
            res.json({result : result})
            console.log(result);
        }
    });
    
});

router.get("/getAppoUser/:idUser",(req,res)=>{
    console.log("here into get appointment of a user");
    appointment.find({ idUser : req.params.idUser }).then(
        (result)=> {
            if(result){
                res.json({result : result})
                console.log("here appointment of the user",result);
            }
        });
});


router.put("/cancel/:id", (req, res) => {
    console.log("here into cancel appointment");

    appointment.updateOne({ _id: req.params.id }, { $set: { state: "canceled" } }).then(

        (result) => {
            if (result) {
                res.json({ result: "appointment canceled" })
            }
        });
});

// router.get("/appoUser/:id",(req,res)=>{
//     let appoUser = []
//     let nameDoc
//     console.log("here into get appointment user");
//     appointment.find({IdUser : req.params.id}).then(
//         (appo)=>{
//             for (let i = 0; i < appo.length; i++) {
//                 user.findById(appo[i].IdDoctor).then(
//                     (doctor)=>{
//                         console.log("doctor",doctor);
//                         appo[i].nameDoctor = doctor.firstName
//                     }
                    
                    
            
                        
//                         res.json({result : appo})
//                         res.json({result2 : doctor})

//                 });
//         });


//     });    
           

      
    
   
            
                
            
              






module.exports = router;