import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})

export class DoctorsComponent implements OnInit {
 
  
  constructor(private userService : UserService,
    private formBuilder : FormBuilder,
    private router : Router) { }
    filtreForm : FormGroup;
    filtre : any = {}
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
    
    doctors : any = []
   



  ngOnInit() {
   this.filtreForm = this.formBuilder.group({
    gov : [''],
    spec : ['']
});
    this.userService.getDoctors().subscribe(
      (data)=>{
        this.doctors = data.result
        console.log("here only doctor",this.doctors)
      });
  }
  search(){
   this.router.navigate([`searchDoctor/${this.filtre.speciality}/${this.filtre.governorate}`])
  }
}
