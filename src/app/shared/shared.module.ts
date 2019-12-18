import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MaterialModule} from '../core/material.module'

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    NavComponent,
    MaterialModule
  ]
})
export class SharedModule { }
