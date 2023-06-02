import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as firebase from 'firebase';

interface hour {
  value: string;
  viewValue: string;
}
export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  selectedValue: string;


  hour: hour[] = [

    {value: '09:00', viewValue: '09:00'},
    {value: '10:00', viewValue: '10:00'},
    {value: '11:00', viewValue: '11:00'},
    {value: '12:00', viewValue: '12:00'},
    {value: '14:00', viewValue: '14:00'},
    {value: '15:00', viewValue: '15:00'},
    {value: '16:00', viewValue: '16:00'},
    {value: '17:00', viewValue: '17:00'},
  ];


  roomForm: FormGroup;
  nickname = '';
  roomname = '';
  ref = firebase.database().ref('rooms/');
  matcher = new MyErrorStateMatcher();
  room: any
  user: any = {}
  appoint: any = {}
  users = [];
  appointment: FormGroup
  doctor : any = []
  doctorId: any
  connectedUser :any = []
  doctorAppointment : any = []
  doctorAppo : any =[]
  trAppo : Boolean
  trTime : Boolean
  trDate : Boolean
  

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router) { }






  ngOnInit() {

    // if (this.user.firstName) {
    //   this.router.navigate(['/roomlist']);
    // }
    this.roomForm = this.formBuilder.group({
      'roomname': [null, Validators.required]
    });
    this.appointment = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      date: [''],
      hour: [''],
      message: [''],
      telephone: [''],
     
    });

    this.doctorId = this.activatedRoute.snapshot.paramMap.get('id')
    this.userService.getUserById(this.doctorId).subscribe(
      (data) => {
        this.doctor = data.result
      });

    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));

    this.user = this.connectedUser;
    this.user.idDoctor = this.doctorId;
    this.user.state = "being processed"

    
      // get appointment by idDoctor
    this.appointmentService.getAppointmentByIdDoctor(this.doctorId).subscribe(
      (data)=>{
        this.doctorAppointment = data.result

      });

  }



  takeIt(dateUser,timeUser) {
    var dateBD : string;
    var timeBD : string;

    

    timeUser =  timeUser.substring(3)
    console.log(timeUser);

    if(timeUser == '') {
      this.trTime = false ;
    }
    else {
      this.trTime = true
    }



    if(dateUser == '') {
      this.trDate = false
    }
    else { 
      this.trDate = true
    }
   
    

    console.log("trTime",this.trTime);
    console.log("trDate",this.trDate);
    
    
    console.log("appointments",this.doctorAppointment);
    
   

    

    for (let i = 0; i < this.doctorAppointment.length; i++) {
      let date = new Date(this.doctorAppointment[i].date)
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDate();

      dateBD = `${year}-${'0'+month}-${day}`
      timeBD = this.doctorAppointment[i].hour

       if ( (dateBD == dateUser)  && (timeBD == timeUser)  && ( (this.doctorAppointment[i].state != 'canceled')) ) {
         this.trAppo = false
         break;
       }
       this.trAppo = true
      
    }

    console.log("RESULT",this.trAppo);
    

    if(this.trAppo != false && timeUser!="" && dateUser!="") {
      var ll2 = this.user.firstName
    var form2 = { nickname: ll2 };
    // selectionner dans rooms un nickname avec connectedUser.firstName s'il existe on l'ajoute le nom a localStorage sinon on creer
    this.ref.orderByChild('nickname').equalTo(ll2).once('value', snapshot => {
      if (snapshot.exists()) {
        localStorage.setItem('nickname', ll2);

      } else {
        const newUser = firebase.database().ref('users/').push();



        firebase.database().ref('users/').orderByChild('nickname').equalTo(this.user.firstName).on('value', (resp2: any) => {
          if (snapshotToArray(resp2).length <= 0) {

            newUser.set(form2);
            localStorage.setItem('nickname', ll2);
          }

        });





      }
    });

    console.log(this.user)
    this.user.nameDoctor = this.doctor.firstName
    this.appointmentService.takeIt(this.user).subscribe(
      (data) => {
        //creation d'une room avec l'ID de rendez-vous
        var ll = data._id
        var form = { roomname: ll };

        this.ref.orderByChild('roomname').equalTo(ll).once('value', (snapshot: any) => {
          if (snapshot.exists()) {
          } else {
            const newRoom = firebase.database().ref('rooms/').push();
            newRoom.set(form);
            this.router.navigate([`/medicalForm/${this.doctorId}`])
          }
        });




      });
    }    
  
    
    
  }

}
