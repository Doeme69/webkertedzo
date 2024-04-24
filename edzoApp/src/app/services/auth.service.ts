import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  registerUser(email:string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  loginUser(email:string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  isLoggedIn(){
    return this.auth.user
  }

  logout(){
    return this.auth.signOut().then(() => {
      console.log('Logged out')
    }).catch(error => {
      console.log(error)
    })
  }
}
