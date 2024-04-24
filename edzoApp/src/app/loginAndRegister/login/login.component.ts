import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailForm: FormControl = new FormControl()
  pswForm: FormControl = new FormControl()

  constructor(private authService: AuthService, private router: Router) {
  }

  loginUser() {
    this.authService.loginUser(this.emailForm.value, this.pswForm.value)
      .then(() => {
        console.log('Sign in successful!');
        this.router.navigate(['/main'])
      })
      .catch(error => {
        console.error('Sign up error:', error);
      });
  }
}
