import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    title: 'Dashboard Module',
  },
  {
    path: 'about',
    loadComponent: () =>
        import('./features/about/about/about.component').then(m => m.AboutComponent),
    title: 'About Standalone',
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
