import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LeaderboardsComponent } from './pages/leaderboards/leaderboards.component';

export const routes: Routes = [
    // Eager-loaded 
    {
        path: 'leaderboards',
        component: LeaderboardsComponent,
        title: 'Leaderboards'
    },

    // Lazy-loaded | standalone component  
    {
        path: 'profile/:id', 
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
        title: (snapshot: ActivatedRouteSnapshot) => {
            const id = snapshot.paramMap.get('id');
            return `Profile - ${id}`;
        }
    },

    // Lazy-loaded | non-standalone component
    {
        path: 'players',
        loadChildren: () => import('./pages/players/players.module').then(m => m.PlayersModule),
        title: 'Players'
    },

    {
        path: '',
        redirectTo: 'leaderboards',
        pathMatch: 'full'
    }
];
