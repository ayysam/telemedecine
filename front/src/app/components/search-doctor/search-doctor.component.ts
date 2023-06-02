import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  doctorByGov: any = []
  doctorsBySpec: any = []
  doctors: any = []
  spec: any
  gov: any
  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.gov = this.activatedRoute.snapshot.paramMap.get('governorate')
    this.spec = this.activatedRoute.snapshot.paramMap.get('speciality')
    console.log("gov is", this.gov)
    console.log("spec is", this.spec)
    if (this.spec != "undefined" && this.gov != "undefined") {
      this.userService.searchDoctorByGov(this.gov).subscribe(
        (data) => {
          this.doctorByGov = data.res
          console.log(`doctors in ${this.gov}`, this.doctorByGov)
          this.userService.searchDoctorBySpec(this.spec).subscribe(
            (data) => {
              this.doctorsBySpec = data.res;
              console.log("tableau de docteur par specialite", this.doctorsBySpec)
              console.log(`doctors in ${this.spec}`, this.doctorsBySpec);

              for (let i = 0; i < this.doctorByGov.length; i++) {
                if (this.doctorByGov[i].location == this.doctorsBySpec[i].location) {
                  this.doctors.push(this.doctorByGov[i])
                }

              }

              console.log(`doctors of ${this.spec}  in ${this.gov}`, this.doctors);



            });
        });
    }
    if (this.spec == "undefined") {
      this.userService.searchDoctorByGov(this.gov).subscribe(
        (data) => {
          this.doctors = data.res
        });
    }

    if (this.gov == "undefined") {
      this.userService.searchDoctorBySpec(this.spec).subscribe(
        (data) => {
          this.doctors = data.res
        });
    }





  }
  route(id) {
    this.router.navigate([`appointement/${id}`])

  }
}
