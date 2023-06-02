import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MedicalFormService } from 'src/app/services/medical-form.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  idAppointment : String
  appointment : any = {}
  medicalForm : any = {}
  user : any = {}
  doctor : any ={}
  idUser : String
  idDoctor : String
  constructor(private activatedRoute : ActivatedRoute,
    private appointmentService : AppointmentService,
    private medicalFormService : MedicalFormService,
    private userService : UserService,
    private router : Router) { }

  ngOnInit() {
        this.idUser = this.activatedRoute.snapshot.paramMap.get('userId')  
        console.log(this.idUser);

        this.doctor = JSON.parse(localStorage.getItem('connectedUser'))
        this.idDoctor = this.doctor._id
        
          
        this.userService.getUserById(this.idUser).subscribe(
          (data)=>{
            this.user = data.result
            this.user.dateOfBirth = this.user.dateOfBirth.substring(0,10)
            console.log("This is user",this.user);
            
          });    
          this.appointmentService.getAppointmentByIdUserAndDoctor(this.idUser,this.idDoctor).subscribe(
            (data)=>{
              this.appointment = data.result
              console.log("Appointment",this.appointment);
              this.idAppointment = this.appointment._id

              
            });

  }

  route1(id) {
    this.router.navigate([`/displayMedicalForm/${this.idAppointment}`])
  }
  route2(id) {
    this.router.navigate([`editUser/${this.doctor._id}`])

  }

  
          
    }


