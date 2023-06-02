import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  connectedUser : any = []

  signupForm : FormGroup;
  imagePreview: string;
  constructor(private formBuilder : FormBuilder,
    private userService : UserService,
    private router : Router) { }
  
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:["",[Validators.minLength(5),Validators.required]],
      lastName:["",[Validators.minLength(5),Validators.required]],
      email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:["",[Validators.minLength(8),Validators.required]],
      confirmPassword:["",[Validators.minLength(8),Validators.required]],
      tel:["",[Validators.minLength(8),Validators.maxLength(13),Validators.required]],
      age:['',Validators.required],
    },{validator: this.passwordConfirming});  

    
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

}
  
passwordConfirming(c: AbstractControl): { invalid: boolean } {
  if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
  }
}

get email(){
	return this.signupForm.get('email')
  }

  // onImageSelected(event: Event) {
  //   //Selection du fichier
  //   const file = (event.target as HTMLInputElement).files[0];
  //   // Ajout d'un attribut img dans l'objet Chef
  //   this.signupForm.patchValue({ img: file });
  //   // Mise à jour des valeurs du form
  //   this.signupForm.updateValueAndValidity();
  //   // Creation d'une variable reader pour lire le contenu defichiers
  //   const reader = new FileReader();
  //   //Déclenchement du event load lors d'une lecture de fichieravec succès
  //   reader.onload = () => {
  //   //affecter le résultat de la lecture dans la variable imagePreview
  //   this.imagePreview = reader.result as string
  //   };
  //   // lecture du contenu du fichier Blob ou File
  //   reader.readAsDataURL(file);
  //   }

signup(f){
  f.role = "User" ;
  console.log(f)
  this.userService.signUp(f).subscribe(
    (data)=>{
      console.log("here response from be", data.result);
    this.router.navigate(['/login'])

    });
 }

 


}