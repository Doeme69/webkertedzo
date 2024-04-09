import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Session} from "../../model/session";

@Component({
  selector: 'app-add-session',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-session.component.html',
  styleUrl: './add-session.component.css'
})
export class AddSessionComponent {

  date1 = new FormControl
  date2 = new FormControl

  //TODO DatePickert kiprobalni
  //TODO Kicserelni a datum valasztast mert amugy csak az orak fognak szamitani

  addSession(){

    console.log(this.date1.value.toString())
  }
}
