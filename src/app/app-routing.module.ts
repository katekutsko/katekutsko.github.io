import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'coupons/:id',
    loadChildren: () =>
      import('./modules/details/details.module').then((module) => module.DetailsModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./modules/checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/login/login.module').then((module) => module.LoginModule),
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/home/home.module').then((module) => module.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
