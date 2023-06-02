import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-v2',
  templateUrl: './doctor-v2.component.html',
  styleUrls: ['./doctor-v2.component.css']
})
export class DoctorV2Component implements OnInit {
  @Input() doctorVsInput : any
  doctor : any = []
  connectedUser: any = []
  constructor(private activatedRoute : ActivatedRoute,
    private userService : UserService,
    private router : Router) { }

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser') || '[]')
    console.log("connectedUser",this.connectedUser.role);
    
    let doctorId = this.activatedRoute.snapshot.paramMap.get('doctorId')
    this.userService.getUserById(doctorId).subscribe(
      (data)=>{
        this.doctor = data.result
        console.log("hhhhhhhhhhhhhhhhhh",this.doctor)
      }
    )
  }
  route1(){
    let doctorId  = this.activatedRoute.snapshot.paramMap.get('doctorId')
    console.log('doctorId',doctorId);
    
    
    if(this.connectedUser.role == "User"){
      this.router.navigate([`appointement/${doctorId}`]);
      }
      else{
        this.router.navigate([`login`]);
      }
  }

  route2(){
    let doctorId  = this.activatedRoute.snapshot.paramMap.get('doctorId')
    this.router.navigate([`editDoctor/${doctorId}`])
  }


}
