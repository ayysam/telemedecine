import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  AllUsers : any;
  users : any = [];
  doctors : any = [];

  constructor(private userService : UserService,
    private router : Router) { }


    getUsers(){
      this.userService.getUsers().subscribe(
        (data)=>{
        this.users = data.result;
        console.log("here only doctor",this.users)

        });
    }

    getDoctors(){
      this.userService.getDoctors().subscribe(
        (data)=>{
          this.doctors = data.result;
          console.log("here only doctor",this.doctors)
        });
    }


  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data)=>{
        console.log(data.users);
        
        this.AllUsers = data.users
        console.log(this.AllUsers);
        
      });
    // this.getDoctors();
    // this.getUsers();
  }

  
//doctor function
  displayDoctor(id){
    this.router.navigate([`displayDoctor/${id}`])
  }

  editDoctor(id){
    alert(id)
    this.router.navigate([`editDoctor/${id}`])

  }

  deleteDoctor(id){
    console.log('delete clicked')
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log('message from BE', data.result);

        this.userService.getAllUsers().subscribe(
          (d)=>{
            console.log(d.users);
            
            this.AllUsers = d.users
            console.log(this.AllUsers);
            
          });
      });
  }
  //end doctor function



  //user function
  editUser(id){
    alert(id)
    this.router.navigate([`editUser/${id}`])
  }

  deleteUser(id){
    console.log('delete clicked')
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log('message from BE', data.result);
        this.userService.getAllUsers().subscribe(
          (data)=>{
            
            this.users = data.users
            
          });
      }
      );
  }

  
  //end user function





}
