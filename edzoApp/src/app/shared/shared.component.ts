import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {

  constructor(private fireAuth: AngularFireAuth) {
  }

  isLoggedIn(){
    return !!this.fireAuth.currentUser
  }
}
