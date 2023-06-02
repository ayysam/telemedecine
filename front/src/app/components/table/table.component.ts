import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';





/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  dataSource :any = [];
  displayedColumns: string[] = [ 'id','firstName', 'lastName', 'email','telephone','remove' ,'Edit'];
  AllUsers : any;
  users : any = [];
  doctors : any = [];

  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit() {
     this.userService.getUsers().subscribe(
      (data)=>{
        this.dataSource=data.result;
        console.log(this.dataSource)
      });

  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data)=>{
        alert("hhhhhhh")
        this.users = data.users
        
      });
  }
  editUser(id){
    alert(id)
    this.router.navigate([`editUser/${id}`])
  }
  deleteUser(id){
    console.log('delete clicked')
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log('message from BE', data.result);
        this.getAllUsers()

      }
      );
      location.reload()

  }

}
