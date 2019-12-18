import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

import {FloorlistComponent} from './dashboard/floorlist/floorlist.component';

export const routes: Routes = [
  
  {
    path: '',
   
    component: DashboardComponent,
    children: [
     {
      path:'',
      pathMatch:'full',
    
      redirectTo:'dashboard'
     },
      {
        path: 'dashboard',
        component: FloorlistComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PgRoutingModule {}
