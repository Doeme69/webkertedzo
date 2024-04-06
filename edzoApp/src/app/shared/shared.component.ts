import { Component } from '@angular/core';
import {Session} from "../model/Session";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {
  date: Date = new Date()

  session: Session = {
    start: {
      year: this.date.getFullYear(),
      month: this.date.getMonth(),
      day: this.date.getDay(),
      hour: this.date.getHours(),
      minute: this.date.getMinutes()
    },
    end: {
      year: this.date.getFullYear(),
      month: this.date.getMonth(),
      day: this.date.getDay(),
      hour: this.date.getHours() + 1,
      minute: this.date.getMinutes()
    }
  }
}
