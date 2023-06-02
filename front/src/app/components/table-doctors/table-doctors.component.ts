import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-doctors',
  templateUrl: './table-doctors.component.html',
  styleUrls: ['./table-doctors.component.css']
})
export class TableDoctorsComponent implements OnInit {
  displayedColumns: string[] = [ 'id','firstName', 'lastName', 'email','telephone','remove' , 'Edit', 'Display'];
  AllUsers : any;
  users : any = [];
  doctors : any = [];
  dataSource :any = [];

  constructor(private userService : UserService,
    private router : Router) { }

    ngOnInit() {
      this.userService.getDoctors().subscribe(
       (data)=>{
         this.dataSource=data.result;
         console.log(this.dataSource)
       });
   }

   getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (d)=>{
        console.log(d.users);
        
        this.AllUsers = d.users
        console.log(this.AllUsers);
        
      });
   }

  //doctor function
  displayDoctor(id){
    this.router.navigate([`doctorProfile/${id}`])
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
        this.getAllUsers();
        
      });
      location.reload();
  }
  //end doctor function

}
