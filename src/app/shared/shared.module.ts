import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MaterialModule} from '../core/material.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent, LoginComponent, LogoutComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    NavComponent,
    LoginComponent,
    LogoutComponent,
    PagenotfoundComponent,
    MaterialModule
  ]
})
export class SharedModule { }
