# 🚀 Angular Routing Demo

This project demonstrates Angular routing using:

✅ A Module-based (lazy-loaded) Component  
✅ A Standalone (lazy-loaded) Component

You'll explore all essential routing features like:

- `path`
- `component`
- `loadChildren`
- `loadComponent`
- `redirectTo`
- `title`
- `canActivate` (optional)

---

## 📁 Project Structure

```
src/
 ┣ app/
 ┃ ┣ features/
 ┃ ┃ ┣ dashboard/        ← Module-based
 ┃ ┃ ┗ about/            ← Standalone
 ┃ ┣ app.routes.ts       ← Central Routing
 ┃ ┣ app.component.ts
 ┃ ┗ app.config.ts       ← Bootstrapping
```

---

## 🛠️ Step-by-Step Guide

### ✅ Step 1: Create Project

```bash
ng new routing-demo --standalone 
cd routing-demo
```

---

### ✅ Step 2: Generate Components and Modules

#### 🧩 2.1 Dashboard (Module-based)

```bash
ng generate module features/dashboard --routing
ng generate component features/dashboard/dashboard
```

> This creates a lazy-loadable module with its own routing.

📄 `dashboard-routing.module.ts`:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
```

---

#### 🧩 2.2 About (Standalone Component)

```bash
ng generate component features/about/about --standalone
```

📄 `about.component.ts`:

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}
```

---

### 📌 Step 3: Configure Routes

📄 `app.routes.ts`:

```ts
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
      import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Standalone',
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
```

---

### ⚙️ Step 4: Bootstrap Application

📄 `main.ts`:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

---

### 🎨 Step 5: App Shell

📄 `app.component.ts`:

```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

📄 `app.component.html`:

```html
<h1>Angular Routing Demo</h1>
<nav>
  <a routerLink="/dashboard">Dashboard</a> |
  <a routerLink="/about">About</a>
</nav>
<hr />
<router-outlet></router-outlet>
```

---

## 📘 Routing Properties Reference

| Property       | Description                                                      |
|----------------|------------------------------------------------------------------|
| `path`         | URL path to match                                                |
| `component`    | Component to render directly                                     |
| `loadChildren` | Lazy-loads a feature module                                      |
| `loadComponent`| Lazy-loads a standalone component                                |
| `canActivate`  | Guards that determine access to route                            |
| `title`        | Sets the browser tab title dynamically                           |
| `redirectTo`   | Path to redirect to                                              |
| `pathMatch`    | Full or prefix match for redirect routes                         |

---

## 🧪 Run the App

```bash
ng serve
```

- 🟢 `/dashboard` → Loads dashboard module
- 🟢 `/about` → Loads standalone component
- 🚫 Any unknown path → Redirects to dashboard

---

## 📌 Summary

You now have:

✅ A **lazy-loaded module** with routing (`Dashboard`)  
✅ A **standalone component** with `loadComponent` routing (`About`)  
✅ A **central route config** demonstrating:

- Redirection
- Dynamic title
- Lazy loading (module & standalone)
- Fallback route

---

## 🙌 Happy Routing!