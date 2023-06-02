import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    
    if (!localStorage.getItem('nickname22')) { 
      localStorage.setItem('nickname22', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('nickname22') 
    }
  
  }

}
