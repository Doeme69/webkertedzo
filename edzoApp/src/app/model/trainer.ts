import {User} from "./user";
import {Session} from "./Session";

export interface Trainer {
  name: string
  email: string
  psw: string
  customers: Array<User>
  sessions: Array<Session>
}
