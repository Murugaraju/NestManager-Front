import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FloorlistComponent } from './dashboard/floorlist/floorlist.component';
//shared Module
import { SharedModule } from '../../shared/shared.module';

// Routing Module
import { PgRoutingModule} from './pg-routing.module';


@NgModule({
  declarations: [DashboardComponent, FloorlistComponent],
  imports: [
    CommonModule,
    PgRoutingModule,
    SharedModule,
    
  ],
  // exports:[PgRoutingModule]
})
export class PgModule { }
