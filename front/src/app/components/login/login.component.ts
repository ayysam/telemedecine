import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService,
    private formBuiler: FormBuilder,
    private router: Router) { }

  connectedUser: any = []
  loginForm: FormGroup;
  user: any = {}
  x : any
  auth:boolean
  ngOnInit() {
    this.loginForm = this.formBuiler.group({
      email: [''],
      password: ['']
    })
  }

  loginFunction() {
    this.userService.login(this.user).subscribe(
      (data) => {
        this.connectedUser = data.result
        console.log(this.connectedUser)
        if (this.connectedUser != false) {
          this.auth = true;
          localStorage.setItem('connectedUser', JSON.stringify(this.connectedUser));
          this.router.navigate(['']);
        
        }
        else{
    this.auth=false ;      }
      });
  };
  reloadPage(): void {
    window.location.reload();
  }
}
