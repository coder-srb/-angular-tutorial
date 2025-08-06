import { Routes } from '@angular/router';
import { SingletonComponent } from './singleton/singleton/singleton.component';
import { TransientComponent } from './transient/transient/transient.component';

export const routes: Routes = [
    { path: 'singleton', component: SingletonComponent },
    { path: 'transient', component: TransientComponent },
    {
        path: 'scoped',
        loadChildren: () => import('./scoped/scoped.module').then(m => m.ScopedModule)
    },
    { path: '', redirectTo: 'singleton', pathMatch: 'full' },
];

