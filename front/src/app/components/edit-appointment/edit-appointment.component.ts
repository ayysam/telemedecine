import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';


interface hour {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {


  selectedValue: string;


  hour: hour[] = [

    { value: '09:00', viewValue: '09:00' },
    { value: '10:00', viewValue: '10:00' },
    { value: '11:00', viewValue: '11:00' },
    { value: '12:00', viewValue: '12:00' },
    { value: '14:00', viewValue: '14:00' },
    { value: '15:00', viewValue: '15:00' },
    { value: '16:00', viewValue: '16:00' },
    { value: '17:00', viewValue: '17:00' },
  ];




  editAppointment: FormGroup
  appointment: any = {}
  appointmentId : string
  doctorAppo: any = []
  idDoctor: string
  trAppo: Boolean
  trTime: Boolean
  trDate: Boolean








  constructor(private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.editAppointment = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      date: [''],
      hour: [''],
      telephone: ['']
    });

    this.appointmentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.appointmentService.getAppoById(this.appointmentId).subscribe(
      (data) => {
        console.log("");
        this.idDoctor = data.result.idDoctor
        console.log("ID DOCTOR", this.idDoctor);


        this.userService.getUserById(data.result.idUser).subscribe(
          (data) => {
            this.appointment.firstName  = data.result.firstName
            this.appointment.lastName  = data.result.lastName
            this.appointment.email  = data.result.email
            this.appointment.telephone  = data.result.telephone
          });
          this.appointment = data.result

        this.appointmentService.getAppointmentByIdDoctor(this.idDoctor).subscribe(
          (data) => {
            this.doctorAppo = data.result
            console.log("appointment of doctor", this.doctorAppo);

          });

      });








  }
  edit(dateUser, timeUser) {

    var dateBD: string;
    var timeBD: string;

    timeUser = timeUser.substring(3)
    console.log(timeUser);
    console.log(dateUser);

    if (timeUser == '') {
      this.trTime = false;
    }
    else {
      this.trTime = true
    }



    if (dateUser == '') {
      this.trDate = false
    }
    else {
      this.trDate = true
    }



    console.log("trTime", this.trTime);
    console.log("trDate", this.trDate);


    for (let i = 0; i < this.doctorAppo.length; i++) {
      let date = new Date(this.doctorAppo[i].date)
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      dateBD = `${year}-${'0' + month}-${day}`
      timeBD = this.doctorAppo[i].hour

      if (dateBD == dateUser && timeBD == timeUser && ( (this.doctorAppo[i].state == 'being processed') || (this.doctorAppo[i].state == 'accepted') )) {
        this.trAppo = false
        break;
      }
      this.trAppo = true

    }
    console.log("TRAPPO", this.trAppo);

    if (this.trAppo != false && timeUser != "" && dateUser != "") {

      this.appointmentService.editAppo(this.appointment).subscribe(
        (data) => {
          console.log(data.result);

        });
        this.router.navigate(['dashboardUser'])
    }

  }



}
