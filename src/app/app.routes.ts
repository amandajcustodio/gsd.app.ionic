import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/main/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/main/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
