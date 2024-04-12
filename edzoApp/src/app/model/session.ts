import {Trainer} from "./trainer";
import {User} from "./user";

export class Session {

  private _trainer?: Trainer
  private _customer?: User
  private _start: Date
  private _end: Date


  constructor(start: Date, end: Date) {
    // this._trainer = trainer;
    // this._customer = customer;
    this._start = start;
    this._end = end;
  }


  set trainer(value: Trainer) {
    this._trainer = value;
  }


  set customer(value: User) {
    this._customer = value;
  }

  get start(): Date {
    return this._start;
  }

  set start(value: Date) {
    this._start = value;
  }

  get end(): Date {
    return this._end;
  }

  set end(value: Date) {
    this._end = value;
  }
}
