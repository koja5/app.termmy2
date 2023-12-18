import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.scss',
    '../../../../assets/styles/authentication.css',
  ],
})
export class SignupComponent {
  public step = 0;

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step > 0 ? this.step-- : this.step;
  }
}
