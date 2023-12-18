import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallApiService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  passwordVisible = false;
  public data!: FormGroup;

  constructor(private service: CallApiService, private form: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.data = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.service.callPostMethod('/api/login', this.data.value).subscribe((data) => {
      console.log(data);
    });
  }

  get dataControl() {
    return this.data.controls;
  }
}
