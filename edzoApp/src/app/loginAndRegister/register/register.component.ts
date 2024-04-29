import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailForm: FormControl = new FormControl()
  pswForm: FormControl = new FormControl()

  constructor(private authService: AuthService, private router: Router) {
  }

  registerUser(){
    this.authService.registerUser(this.emailForm.value, this.pswForm.value)
      .then(() => {
        console.log('Sign up successful!');
        this.router.navigate(['/main'])
      })
      .catch(error => {
        console.error('Sign up error:', error);
        alert("Invalid credentials!")
      });
  }
}
