import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor : any = []
  constructor(private activatedRoute : ActivatedRoute,
    private userService : UserService,
    private router : Router) { }

  ngOnInit() {
    let doctorId = this.activatedRoute.snapshot.paramMap.get('doctorId')
    this.userService.getUserById(doctorId).subscribe(
      (data)=>{
        this.doctor = data.result
        console.log("hhhhhhhhhhhhhhhhhh",this.doctor)
      }
    )
  }
  

}
