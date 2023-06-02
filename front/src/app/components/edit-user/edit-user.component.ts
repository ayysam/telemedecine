import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any = {}
  EditForm: FormGroup;
  userId: String;
  connectedUser : any = []
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.EditForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      password: [""],
      tel: [""],
      dateOfBirth: [''],
    });

    this.userId = this.activatedRoute.snapshot.paramMap.get("id"),
      this.userService.getUserById(this.userId).subscribe(
        (data) => {
          console.log(data.result)
          this.user = data.result
        });

  }

  editFunction() {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        console.log('message from BE', data.result)
        if (this.connectedUser.role == "Admin") {
          this.router.navigate(["dashboardAdmin"])
        }
        if (this.connectedUser.role == "User") {
          this.router.navigate([`userProfile/${this.connectedUser._id}`])

        }
      });



  }
}
