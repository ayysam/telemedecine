import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MedicalFormService } from 'src/app/services/medical-form.service';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.component.html',
  styleUrls: ['./medical-form.component.css']
})
export class MedicalFormComponent implements OnInit {


  

  idAppointment : String
  appointment : any = []
  medicalForm : any = []
  user : any = []
  idUser : String
  form : any = {}
  medForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private appointmentService : AppointmentService,
    private medicalFormService : MedicalFormService,
    private userService : UserService,
    private router : Router) { }

  ngOnInit() {

    this.medForm = this.formBuilder.group({
      height:[''],
      weight:[''],
      sex:[''],
      obj1:[''],
      obj2:[''],
      obj3:[''],
    });




    this.idAppointment = this.activatedRoute.snapshot.paramMap.get('appoId')
    this.appointmentService.getAppoById(this.idAppointment).subscribe(
      (data)=>{
        this.appointment = data.result
        this.idUser  = this.appointment.idUser
        this.userService.getUserById(this.idUser).subscribe(
          (data)=>{
            this.user = data.result
            console.log("This is user",this.user);
            
          });
                
      });

      this.medicalFormService.getMedicalFormByIdAppointment(this.idAppointment).subscribe(
        (data)=>{
          this.medicalForm = data.result
          console.log("medical form from BD",this.medicalForm);
          this.form.height = this.medicalForm[0].height
          this.form.weight = this.medicalForm[0].weight
          this.form.sex = this.medicalForm[0].sex
          this.form.obj1 = this.medicalForm[0].text1
          this.form.obj2 = this.medicalForm[0].text2
          this.form.obj3 = this.medicalForm[0].text3

          
        });



        
  }
  submit(){
    this.router.navigate(['/dashboardDoctor'])
  }
  
}

