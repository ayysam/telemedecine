import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: '',
  databaseURL: 'https://chatroom-dda39-default-rtdb.europe-west1.firebasedatabase.app/'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dokotala';
  constructor() {
    firebase.initializeApp(config);
  }
}
