import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form Course';

  get usernameField(){
    return this.registrationForm.controls['username']
  }

  get passwordField(){
    return this.registrationForm.get("password")
  }

  get confirmPasswordField(){
    return this.registrationForm.get("confirmPassword")
  }

  constructor(private formBuilder: FormBuilder) {
  }

  registrationForm = this.formBuilder.group({
      username: ["Ibra", [Validators.required, Validators.minLength(4)]],
      password: ["123"],
      confirmPassword: ['']
  })

}
