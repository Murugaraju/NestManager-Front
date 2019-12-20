import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
// Todo is pending on Guard with authentication
import { RouteGuardService} from './route-guard.service'
const routes: Routes = [
  {
    path:'',
    canActivate:[RouteGuardService],
    redirectTo:'/pg/dashboard',
    pathMatch:'full'
  },
  {
    path:'login',
    
    component:LoginComponent
  },
  {
    path:'pg',

    canActivate:[RouteGuardService],
    
    loadChildren:()=>import('./modules/pg/pg.module').then((mod)=>mod.PgModule)
      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }