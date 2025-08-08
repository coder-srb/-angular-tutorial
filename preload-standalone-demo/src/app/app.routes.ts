import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
        data: { preload: false },  // <-- enable preloading for this route
        title: 'About'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { preload: true },  // <-- enable preloading for this route
        title: 'Dashboard'
    }
];
