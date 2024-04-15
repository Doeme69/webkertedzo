import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Session} from "../../model/session";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-session',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {

  day = new FormControl
  hour = new FormControl
  selectedHour: string = ''
  chosenHour: string = ''

  addSession(){
    this.chosenHour = this.selectedHour
    let date = this.day.value.toString().split('-')
    let time = this.hour.value.toString().split(':')

    let asd: Date = new Date(date[0], date[1], date[2], time[0], time[1])
    let dsa: Date = new Date(date[0], date[1], date[2], time[0], time[1])
    dsa.setMinutes(asd.getMinutes() + + this.chosenHour)

    //TODO Adatbazisba rakni

    return new Session(asd, dsa)
  }
}
