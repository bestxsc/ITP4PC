import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.LoginForm = fb.group({
      'userName': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      remember: [true]
    });
  }

  ngOnInit() {
  }

  submitForm(): void {
    for (const i in this.LoginForm.controls) {
      this.LoginForm.controls[i].markAsDirty();
      this.LoginForm.controls[i].updateValueAndValidity();
    }
  }

}
