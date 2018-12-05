import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;

  constructor(fb:FormBuilder) { 
    this.LoginForm = fb.group({
      'name':[''],
      'password':['']
    })
  }

  ngOnInit() {
  }

  onSubmit(value: string): void{
    console.log('you submitted value:',value);
  }

}
