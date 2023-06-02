import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
 @Input() doctorInput : any
 connectedUser : any
  constructor(private router : Router) { }

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser') || '[]' );
  }
  route(id){ 
    if(this.connectedUser){
    this.router.navigate([`appointement/${id}`]);
    }
    else{
      this.router.navigate([`login`]);
    }

}

  profile(id){

    this.router.navigate([`doctorProfile/${id}`])

}
}
