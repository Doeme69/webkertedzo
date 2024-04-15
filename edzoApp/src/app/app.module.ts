import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginAndRegister/login/login.component';
import { RegisterComponent } from './loginAndRegister/register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SharedComponent } from './shared/shared.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProgressComponent } from './progress/progress.component';
import { CustomersComponent } from './customers/customers.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    SharedComponent,
    CalendarComponent,
    ProgressComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
