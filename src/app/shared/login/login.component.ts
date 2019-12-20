import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor( private authService: AuthService) { }

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

  this.authService.login();
}
}
