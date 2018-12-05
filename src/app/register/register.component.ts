import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup;

  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'name':[''],
      'password':[''],
      'repassword':[''],
      'mail':['']
    })
  }
  ngOnInit() {
  }


  onSubmit(value: string): void{
    console.log('you submitted value:',value);

  }
}
