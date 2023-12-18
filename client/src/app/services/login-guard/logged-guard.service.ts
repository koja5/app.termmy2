import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../help.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuardService {
  constructor(
    private router: Router,
    public helpService: HelpService,
    private storageService: StorageService
  ) {}

  canActivate() {
    if (!this.storageService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
