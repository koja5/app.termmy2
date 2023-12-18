import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from 'src/app/services/help.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public collapssedBody = '';
  public collapsedMenu = '';
  public menuType = 'vertical-menu-modern';
  public backgroundOverlay = '';
  public menu = '';

  constructor(
    private helpService: HelpService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.menuType = this.helpService.checkMenuType();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.menuType = this.helpService.checkMenuType();
  }

  collapseMenu() {
    this.collapssedBody === ''
      ? (this.collapssedBody = 'menu-collapsed')
      : (this.collapssedBody = '');
  }

  collapseMobileMenu() {
    this.collapssedBody === ''
      ? (this.collapssedBody = 'menu-open')
      : (this.collapssedBody = '');
    this.backgroundOverlay === ''
      ? (this.backgroundOverlay = 'show')
      : (this.backgroundOverlay = '');
  }

  hideRequired() {
    this.menu = '';
  }

  showMenu() {
    this.menu === '' ? (this.menu = 'show') : (this.menu = '');
  }

  logout() {
    this.storageService.deleteToken();
    this.router.navigate(['auth/login']);
  }
}
