import {Trainer} from "./trainer";
import {Session} from "./Session";

export interface User {
  name: string
  email:string
  psw: string
  weight: number
  height: number
  trainer?: Trainer
  sessions?: Array<Session>
}
