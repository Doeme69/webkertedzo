import {Trainer} from "./trainer";
import {User} from "./user";

export class Session {

  private _trainer: Trainer
  private _customer?: User
  private _start: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  }
  private _end: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  }


  constructor(trainer: Trainer, customer: User, start: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number
  }, end: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number }) {
    this._trainer = trainer;
    this._customer = customer;
    this._start = start;
    this._end = end;
  }


  get trainer(): Trainer {
    return this._trainer;
  }

  set trainer(value: Trainer) {
    this._trainer = value;
  }

  set customer(value: User) {
    this._customer = value;
  }

  get start(): { year: number; month: number; day: number; hour: number; minute: number } {
    return this._start;
  }

  set start(value: { year: number; month: number; day: number; hour: number; minute: number }) {
    this._start = value;
  }

  get end(): { year: number; month: number; day: number; hour: number; minute: number } {
    return this._end;
  }

  set end(value: { year: number; month: number; day: number; hour: number; minute: number }) {
    this._end = value;
  }
}
