import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home', pathMatch: 'full'},
  {path: 'users', component: UsersComponent, title: "users"},
  {path: 'users/:id', component: UserDetailsComponent, title: "User Details"},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
