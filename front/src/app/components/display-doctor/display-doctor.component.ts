import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-doctor',
  templateUrl: './display-doctor.component.html',
  styleUrls: ['./display-doctor.component.css']
})
export class DisplayDoctorComponent implements OnInit {

  doctor : any;
  doctorId : any;
  connectedUser : any = []
  constructor(private activatedRoute : ActivatedRoute,
    private userService : UserService,
    private router : Router) { }

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
    let doctorId = this.activatedRoute.snapshot.paramMap.get('doctorId')
    
    this.userService.getUserById(doctorId).subscribe(
      (data)=>{
        this.doctor = data.result
        console.log("hhhhhhhhhhhhhhhhhh",this.doctor)
      }
    )
  }
  route(){
    let doctorId  = this.activatedRoute.snapshot.paramMap.get('doctorId')
    console.log("doctorID",doctorId)
    
    
  //   if(this.connectedUser){
  //     this.router.navigate([`appointement/${doctorId}`]);
  //     }
  //     else{
  //       this.router.navigate([`login`]);
  //     }
  }

}
