import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { NotFoundComponent } from './components/parts/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
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
