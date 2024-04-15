import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register: FormGroup = new FormGroup<User>({
    username: new FormControl,
    email: new FormControl,
    psw: new FormControl
  })

  registerUser(){

  }
}
