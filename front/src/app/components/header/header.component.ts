import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connectedUser: any = []
  connected: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    if (this.connectedUser) {
      this.connected = true
    }
    else {
      this.connected = false

    }
  }
  logOut() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    if (this.connectedUser) {
      localStorage.removeItem('connectedUser');
      location.reload();
      this.router.navigate([''])
    }
  }

  userProfile() {
    let idUser = this.connectedUser._id
    this.router.navigate([`userProfile/${idUser}`])
  }

  editProfile() {
    if(this.connectedUser.role == "Doctor") {
      let idUser = this.connectedUser._id
      this.router.navigate([`editDoctor/${idUser}`])
  
    }
    if(this.connectedUser.role == "User") {
      let idUser = this.connectedUser._id
      this.router.navigate([`editUser/${idUser}`])
  
    }
   
  }

  doctorProfile(){
    let idUser = this.connectedUser._id
    this.router.navigate([`doctorProfile/${idUser}`])

  }

}
