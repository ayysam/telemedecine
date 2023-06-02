import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-appointments',
  templateUrl: './table-appointments.component.html',
  styleUrls: ['./table-appointments.component.css']
})
export class TableAppointmentsComponent implements OnInit {
  displayedColumns: string[] = [ 'Id doctor','Id user','Name doctor','Name user','Date','Hour', 'State'];

  doctorsName = []
  usersName = []
  appointments:any = []

  constructor(private userService : UserService,
    private appointmentService : AppointmentService) { }

  ngOnInit() {
    var dateBD: String
    this.appointmentService.getAllAppointments().subscribe(
      
      (data)=> {
        this.appointments = data.result
        for (let i = 0; i < this.appointments.length; i++) {
          let date = new Date(this.appointments[i].date)
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();

          dateBD = `${year}-${'0' + month}-${day}`
          this.appointments[i].date = dateBD;
        }
        console.log("here appointments",this.appointments)
       
        console.log("here list of doctors",this.doctorsName)
        console.log("here list of users",this.usersName)


      });

      
    


  }

}
