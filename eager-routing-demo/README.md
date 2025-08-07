# 🚀 Angular Routing: Eager Loading Project

## ✅ 1. EAGER LOADING PROJECT
#### What is Eager Loading in Angular?
Eager Loading is the default module loading strategy in Angular where all the components, services, and modules are loaded immediately when the application starts — even if the user doesn’t navigate to them.

##### 🔍 Simple Definition:
Eager loading means loading everything up front when the app starts.

### 🔹 Step 1: Create Project
```bash
ng new eager-routing-demo
cd eager-routing-demo
```

### 🔹 Step 2: Generate Components
```bash
ng generate component pages/home
ng generate component pages/about
ng generate component pages/dashboard
```

### 🔹 Step 3: Define Routes (in app-routing.module.ts)
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### 🔹 Step 4: Add Router Links in app.component.html
```html
<h1>Eager Loading Demo</h1>
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a> |
  <a routerLink="/dashboard">Dashboard</a>
</nav>
<hr />
<router-outlet></router-outlet>
```

### ✅ Done! Run it:
```bash
ng serve
```