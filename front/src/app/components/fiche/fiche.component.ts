import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MedicalFormService } from 'src/app/services/medical-form.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {
  medicalForm : FormGroup;
  form: any = {}
  connectedUser : any = []
  appointment : any = []
  constructor(private formBuilder : FormBuilder,
    private medicalFormService : MedicalFormService,
    private activatedRoute : ActivatedRoute,
    private appointmetService : AppointmentService,
    private router : Router) { }

  ngOnInit() {
    this.medicalForm = this.formBuilder.group({
      height:[''],
      weight:[''],
      sex:[''],
      obj1:[''],
      obj2:[''],
      obj3:[''],
    });

    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    let userId = this.connectedUser._id;
    let doctorId = this.activatedRoute.snapshot.paramMap.get('doctorId');
    
    
    this.appointmetService.getAppointmentByIdUserAndDoctor(userId,doctorId).subscribe(
      (data)=> {
        this.appointment = data.result
        this.form.idAppointment = this.appointment._id
        this.form.idUser = userId;
        this.form.idDoctor = doctorId
        this.form.dateOfBirth = this.connectedUser.dateOfBirth

        console.log(this.form);

        
      }
    )
  }
  submit() {
    console.log("hhhhhhh",this.form);
    
    this.medicalFormService.saveForm(this.form).subscribe(
      (data)=>{
        console.log("here response from BE",data.result);
        
      });
      this.router.navigate(['dashboardUser'])
    
   }

}
