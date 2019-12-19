import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.nullValidator]),
  });
  constructor() { }

  ngOnInit() {

  }
onSubmit(){
  console.log('came in ',this.loginForm.value)
  console.log('formgroup object',this.loginForm)
}
}
