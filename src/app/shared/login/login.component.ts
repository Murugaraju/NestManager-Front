import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginLoading=false;
    constructor( private authService: AuthService,private route: Router) { }

    ngOnInit() {

    }
    loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.nullValidator]),
  });
  
onSubmit(){
  console.log('came in ',this.loginForm.value);
  console.log('formgroup object',this.loginForm);

  console.log('Going to initiate service method');
  this.loginLoading=true;
  this.authService.login().then(
    (value:Object)=>{
      this.loginLoading=true;
      this.route.navigate(['/pg/dashboard'])
    }
  );
}
}
