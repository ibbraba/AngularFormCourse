import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form Course';

  constructor(private formBuilder: FormBuilder) {
  }

  registrationForm = this.formBuilder.group({
      username: ["Ibra"],
      password: ["123"],
      confirmPassword: ['']
  })

}
