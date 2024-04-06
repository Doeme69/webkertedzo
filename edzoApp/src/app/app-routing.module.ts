import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./loginAndRegister/register/register.component";
import {MainpageComponent} from "./mainpage/mainpage.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'main', component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
