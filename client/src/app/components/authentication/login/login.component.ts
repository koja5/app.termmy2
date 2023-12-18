import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CallApiService } from 'src/app/services/call-api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  passwordVisible = false;
  public data!: FormGroup;

  constructor(
    private service: CallApiService,
    private form: FormBuilder,
    private router: Router,
    private storageService: StorageService
  ) {}

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
    this.service
      .callPostMethod('/api/login', this.data.value)
      .subscribe((data: any) => {
        console.log(data);
        if (data && data.token) {
          this.router.navigate(['dashboard']);
          this.storageService.setToken(data.token);
        }
      });
  }

  get dataControl() {
    return this.data.controls;
  }
}
