import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  connectedUser : any = []
  constructor() { }

  ngOnInit() {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log("TOPBAAR",this.connectedUser);
    
  }

}
