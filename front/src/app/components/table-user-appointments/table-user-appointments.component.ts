import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-user-appointments',
  templateUrl: './table-user-appointments.component.html',
  styleUrls: ['./table-user-appointments.component.css']
})
export class TableUserAppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['Doctor name', 'Date', 'hour', 'State','Chat','Cancel','Edit'];
  connectedUser: any = []
  userId: string
  appoUser: any = []
  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.getAppoUser();

  }
  getAppoUser() {
    var dateBD : String

    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
    this.userId = this.connectedUser._id;
    this.appointmentService.getAppoUser(this.userId).subscribe(
      (data)=>{
        this.appoUser = data.result
        console.log(this.appoUser);
        for (let i = 0; i<  this.appoUser.length; i++) {
          let date = new Date(this.appoUser[i].date)
          let year = date.getFullYear();
          let month = date.getMonth()+1;
          let day = date.getDate();
    
          dateBD = `${year}-${'0'+month}-${day}`
          this.appoUser[i].date = dateBD;
        }
        console.log(this.appoUser);

      }
      
    )};

    cancelAppo(appo) {
      this.appointmentService.cancelAppointment(appo).subscribe(
        (data) => {
          this.getAppoUser();        
        });
    }
  
    editAppo(id) {
      this.router.navigate([`editAppointment/${id}`])
    }
  
  
    
    enterChatRoom(roomname: string) {
   
     
  
      this.router.navigate(['/chat', roomname]);
    }
}
