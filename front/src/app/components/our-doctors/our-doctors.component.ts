import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.css']
})
export class OurDoctorsComponent implements OnInit {
  doctors : any = []
  
  constructor(private userservice : UserService) { }

  ngOnInit() {
    this.userservice.getDoctors().subscribe(
      (data)=>{
        this.doctors = data.result;
        console.log(this.doctors)
      }
    )
  }

}
