import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private auth: AuthService) {}


  ngOnInit() {
    this.auth.isLoggedIn().subscribe(user => {
      console.log(user)
      this.loggedInUser = user
    }, error => {
      console.log(error)
    })
  }

  loggedInUser?: firebase.default.User | null

  logout() {
    return this.auth.logout()
  }
}
