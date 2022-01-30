import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {confirmPasswordValidator} from "./shared/passwordConfirm.validator";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form Course';

  get formErrors(){
    return this.registrationForm.errors
  }

  get usernameField(){
    return this.registrationForm.controls['username']
  }

  get passwordField(){
    return this.registrationForm.controls['password']
  }

  get confirmPasswordField(){
    return this.registrationForm.controls['confirmPassword']
  }

  constructor(private formBuilder: FormBuilder) {
  }

  registrationForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
  }, {validator : confirmPasswordValidator })

}
