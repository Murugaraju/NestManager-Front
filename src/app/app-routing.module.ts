import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Todo is pending on Guard with authentication
const routes: Routes = [
  {
    path:'',
    redirectTo:'/pg/dashboard',
    pathMatch:'full'
  },
  {
    path:'pg',
    loadChildren:()=>{ 
    return import('./modules/pg/pg.module').then(
      (mod)=>mod.PgModule
    )
      },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
