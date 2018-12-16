import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm:FormGroup;

  constructor(fb:FormBuilder) {
    this.regForm = fb.group({
      'userName':['', [ Validators.required ]],
      'password':['', [ Validators.required ]],
      'checkPassword':['',[ Validators.required, this.confirmationValidator ]],
      'email':['',[ Validators.email, Validators.required ]]
    })

  }

  ngOnInit() {
  }

  submitForm(): void {
    for (const i in this.regForm.controls) {
      this.regForm.controls[ i ].markAsDirty();
      this.regForm.controls[ i ].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** 实时刷新 */
    Promise.resolve().then(() => this.regForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.regForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

}
