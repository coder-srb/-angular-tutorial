import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectivePreloadingStrategyService } from './services/selective-preloading.strategy.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { preload: true },  // <-- enable preloading for this route
    title: 'About'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    data: { preload: false },  // <-- skip for selective preloading
    title: 'Contact'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    data: { preload: true },  // <-- enable preloading for this route
    title: 'Dashboard'
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  // Option A: No preloading (default)
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading})],  

  // Option B: Preload all modules
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],

  // Option C: Custom selective preloading
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategyService })],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
