import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { NotFoundComponent } from './components/parts/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginGuardService } from './services/login-guard/login-guard.service';
import { LoggedGuardService } from './services/login-guard/logged-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [LoggedGuardService],
    loadChildren: () =>
      import(
        './components/authentication/routing-module/authentication.module'
      ).then((m) => m.AuthenticationModule),
  },
  {
    path: 'booking/:id',
    loadChildren: () =>
      import('./components/booking-form/routing-module/booking.module').then(
        (m) => m.BookingModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [LoginGuardService],
    loadChildren: () =>
      import('./components/dashboard/routing-module/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
