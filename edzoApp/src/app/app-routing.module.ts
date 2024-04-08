import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./loginAndRegister/register/register.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {ProgressComponent} from "./progress/progress.component";
import {CustomersComponent} from "./customers/customers.component";

const routes: Routes = [
  {path: '', component:MainpageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component:MainpageComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'progress', component:ProgressComponent},
  {path: 'customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
