import {Trainer} from "./trainer";
import {User} from "./user";

export interface Session{
  trainer?: Trainer
  customer?: User
  start : {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  }
  end : {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  }
}
