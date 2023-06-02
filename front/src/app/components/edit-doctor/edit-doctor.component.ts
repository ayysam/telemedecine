import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  EditForm : FormGroup;
  userId : String;
  user : any = []




  governorate : any = [
    { gov : 'Ariana'},
    { gov : 'Beja'},
    { gov : 'Ben Arous'},
    { gov : 'Bizerte'},
    { gov: 'Gabes'},
    { gov: 'Gafsa'},
    { gov : 'Jendouba'},
    { gov : 'Kairouan'},
    { gov : 'Kasserine'},
    { gov : 'Kebili'},
    { gov : 'Le Kef'},
    { gov : 'Mahdia'},
    { gov : 'La Manouba'},
    { gov : 'Medenine'},
    { gov : 'Monastir'},
    { gov : 'Nabeul'},
    { gov : 'Sfax'},
    { gov : 'Sidi Bouzid'},
    { gov : 'Siliana'},
    { gov : 'Sousse'},
    { gov : 'Tataouine'},
    { gov : 'Tozeur'},
    { gov : 'Tunis'},
    { gov : 'Zaghouan'},
  ]

  speciality : any = [
    {spec : "Neurology"},
    {spec : "Ophthalmology"},
    {spec : "Psychiatry"},
    {spec : "Pediatrics"},
    {spec : "Urology"},
    {spec : "Cardiology"},
    {spec : "Dermatology"},
    {spec : "Public health"},
    {spec : "Urology"}
  ]





  constructor(private userService : UserService,
    private activatedRoute : ActivatedRoute,
    private  formBuilder : FormBuilder,
    private router : Router
  ) { }

  ngOnInit() {

    this.EditForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email: [''],
      password:[''],
      confirmPassword:[''],
      tel:[''],
      adress:[''],
      location:[''],
      dateOfBirth:[''],
      speciality:[''],
      about:[''],
      image:['']
    });



    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userId).subscribe(
      (data) => {
        this.user = data.result;
        console.log(this.user);

      });


  }



  get email(){
    return this.EditForm.get('email')
    } 
  
    passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
  }


  editFunction(){
    this.userService.updateUser(this.user).subscribe(
      (data)=> {
        console.log('message from BE' , data.result)
        this.router.navigate([`doctorProfile/${this.user._id}`])
      });
  }

}
