import { Injectable } from '@angular/core';
import { 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router


} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authService:AuthService, private route:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
    console.log('canActivate triggered')
    return this.authService.isAuthenticate().then(
      (authenticated:boolean)=>{
        if(authenticated){
          
          return true;
        }
        else{
          this.route.navigate(['/login'])
          return false;
        }
      }
    )
  }
}
