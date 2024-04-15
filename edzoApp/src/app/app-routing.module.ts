import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./loginAndRegister/register/register.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ProgressComponent} from "./progress/progress.component";
import {CustomersComponent} from "./customers/customers.component";
import {AddSessionComponent} from "./calendar/add-session/add-session.component";
import {LoginComponent} from "./loginAndRegister/login/login.component";


const routes: Routes = [
  {path: '', component:MainpageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', component:MainpageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'progress', component:ProgressComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'addSession', component: AddSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
