import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up-doc',
  templateUrl: './sign-up-doc.component.html',
  styleUrls: ['./sign-up-doc.component.css']
})
export class SignUpDocComponent implements OnInit {
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
  signupForm : FormGroup;
  connectedUser : any = []

  constructor(private formBuilder : FormBuilder,
    private userService : UserService,
    private router : Router) { }
  
  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

    this.signupForm = this.formBuilder.group({
      firstName:["",[Validators.minLength(3),Validators.required]],
      lastName:["",[Validators.minLength(3),Validators.required]],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:["",[Validators.minLength(8),Validators.required]],
      confirmPassword:["",Validators.required],
      tel:["",[Validators.minLength(8),Validators.maxLength(13),Validators.required]],
      adress:[''],
      location:[''],
      dateOfBirth:[''],
      speciality:[''],
      about:[''],
      image:['']
    },{validator: this.passwordConfirming})
    
      

}

get email(){
	return this.signupForm.get('email')
  } 

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
  if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
  }
}

signup(f){
  f.role = "Doctor"
  f.imageUrl='../assets/img/doctors/doctor.jpg' ;
  console.log(f)
    this.userService.signUp(f).subscribe(
     (data)=>{
      console.log("here response from be", data.result)
       this.router.navigate(['/login'])
   });
}
// onImageSelected(event: Event) {
//   const file = (event.target as HTMLInputElement).files[0];
//   this.signupForm.patchValue({ img: file });
//   this.signupForm.updateValueAndValidity();
//   const reader = new FileReader();
//   reader.onload = () => {
//   this.imagePreview = reader.result as string
//   };
//   reader.readAsDataURL(file);
//   }


}