import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Session} from "../../model/session";
import {RouterLink} from "@angular/router";
import {addDoc, collection, Firestore} from "@angular/fire/firestore";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";

@Component({
  selector: 'app-add-session',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {

  constructor(private firestore: Firestore) {
  }

  day = new FormControl
  hour = new FormControl
  selectedHour: string = ''
  chosenHour: string = ''

  async addSession(){
    this.chosenHour = this.selectedHour
    let date = this.day.value.toString().split('-')
    let time = this.hour.value.toString().split(':')

    let start: Date = new Date(date[0], date[1], date[2], time[0], time[1])
    let end: Date = new Date(date[0], date[1], date[2], time[0], time[1])
    end.setMinutes(start.getMinutes() + + this.chosenHour)

    //TODO Adatbazisba rakni

    let startString: string = start.getFullYear() + '-' + start.getMonth() + '-' + start.getDate() + '-' + start.getHours() + '-' + start.getMinutes()
    let endString: string = end.getFullYear() + '-' + end.getMonth() + '-' + end.getDate() + '-' + end.getHours() + '-' + end.getMinutes()


    let doc = await addDoc(collection(this.firestore, 'sessions'), {
      start: startString,
      end: endString
    })
  }
}
