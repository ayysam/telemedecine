import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';
import * as firebase from 'firebase';
import { DatePipe } from '@angular/common';
import { MedicalFormService } from 'src/app/services/medical-form.service';

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
@Component({
  selector: 'app-table-doctor-appointments',
  templateUrl: './table-doctor-appointments.component.html',
  styleUrls: ['./table-doctor-appointments.component.css']
})
export class TableDoctorAppointmentsComponent implements OnInit {
  displayedColumns: string[] = [ 'Name user', 'Date', 'Hour', 'State', 'Accept', 'Refuse','Delete', 'chat','userProfile' , 'medicalForm'];

  nickname = '';
  ref = firebase.database().ref('rooms/');

  rooms = [];
  isLoadingResults = true;
  doctorsName = []
  usersName = []
  appointments: any = []
  OneDoctorAppointments: any = []
  connectedUser: any = []
  allAppointments: any = []
  constructor(private userService: UserService, 
    private router: Router, public datepipe: DatePipe,
    private appointmentService: AppointmentService,
    private medicalFormService : MedicalFormService) {
    this.nickname = localStorage.getItem('nickname');
    firebase.database().ref('rooms/').on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
      this.isLoadingResults = false;
    });
  }

  getDoctorAppointment() {
    var dateBD: String

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"))
    let doctorId = this.connectedUser._id;
    console.log(doctorId);

    this.appointmentService.getAppointmentByIdDoctor(doctorId).subscribe(
      (data) => {
        this.appointments = data.result
        console.log(this.appointments);

        for (let i = 0; i < this.appointments.length; i++) {
          let date = new Date(this.appointments[i].date)
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();

          dateBD = `${year}-${'0' + month}-${day}`
          this.appointments[i].date = dateBD;
        }
      });

  }




  ngOnInit() {

   this.getDoctorAppointment()

  }


  reloadPage(): void {
    window.location.reload();
  }

  acceptAppo(appo) {

    this.appointmentService.acceptAppo(appo).subscribe(
      (data) => {
        console.log(data.result);
        this.getDoctorAppointment()

                
      });



  }

  cancelAppo(appo) {
    this.appointmentService.cancelAppointment(appo).subscribe(
      (data)=> {
        this.getDoctorAppointment() 
        console.log(data.result)
      });
  }

  deleteAppo(id) {
    this.appointmentService.refuseAppo(id).subscribe(
      (data)=>{
        console.log(data.result);
      });
      this.medicalFormService.deleteMedicalForm(id).subscribe(
        (data)=>{
          console.log(data.result);
        });
      this.reloadPage()
  }

  enterChatRoom(roomname: string) {
    var ll2 = this.connectedUser.firstName
    var form2 = { nickname: ll2 };
    this.ref.orderByChild('nickname').equalTo(ll2).once('value', snapshot => {
      if (snapshot.exists()) {
        localStorage.setItem('nickname', ll2);
      } else {
        const newUser = firebase.database().ref('users/').push();
        firebase.database().ref('users/').orderByChild('nickname').equalTo(this.connectedUser.firstName).on('value', (resp2: any) => {
          if (snapshotToArray(resp2).length <= 0) {
            newUser.set(form2);
            localStorage.setItem('nickname', ll2);
          }
        });
      }
    });



    this.router.navigate(['/chat', roomname]);
  }

  displayUserProfile(id){
    this.router.navigate([`/userProfile/${id}`]);
    }

    displayMedicalForm(id) {
      this.router.navigate([`/displayMedicalForm/${id}`])
    }

}
