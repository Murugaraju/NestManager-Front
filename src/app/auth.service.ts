import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
 
  constructor() { }
  //creating fake authenticate
  isAuthenticate(){
    console.log("is authenticated executed")
    const promise = new Promise ((resolve,reject)=>{
      return resolve(this.loggedIn)
    })
    return promise;
  }
  login(){
    console.log("It worked in auth service")
    
    const loginpromise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        this.loggedIn=true;
        
        return resolve({loggedIn:this.loggedIn})},1000)
    })
    return loginpromise
  }
  logout(){
    this.loggedIn=false;
  }
}
