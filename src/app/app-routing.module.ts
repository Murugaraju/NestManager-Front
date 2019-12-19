import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
// Todo is pending on Guard with authentication
const routes: Routes = [
  {
    path:'',
    redirectTo:'/pg/dashboard',
    pathMatch:'full'
  },
  {
    path:'login',
    
    component:LoginComponent
  },
  {
    path:'pg',
    loadChildren:()=>import('./modules/pg/pg.module').then((mod)=>mod.PgModule)
      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }