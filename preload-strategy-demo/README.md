# Angular Preloading Strategy Demo

This project demonstrates the use of **PreloadingStrategy** in Angular Router to control how lazy-loaded modules are loaded in the background after the application starts.

---

## 📌 What is Preloading Strategy?
In Angular, **PreloadingStrategy** defines how and when lazy-loaded modules are preloaded **after** the initial application load.  
This improves navigation speed for routes the user might visit soon.

---

## ⚡ Available Preloading Strategies

### 1️⃣ NoPreloading
- **Description:** No modules are preloaded. Lazy-loaded modules are loaded only when the route is visited.
- **When to Use:** Apps with large lazy modules where preloading would slow down the initial load.
```ts
RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
```

### 2️⃣ PreloadAllModules
- **Description:** All lazy-loaded modules are preloaded immediately after the app loads.
- **When to Use:** Small/medium apps where you want fast navigation to all routes.
```ts
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
```

### 3️⃣ Custom Preloading Strategy
- **Description:** You define custom rules to decide which modules to preload.
- **When to Use:** Large apps where you want to preload only selected modules.
- **Example Use Case:** Preload only admin-related modules for logged-in admins.
```ts
@Injectable({ providedIn: 'root' })
export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
```

---

## 🚀 Step-by-Step Implementation

### 1. Create Angular Project
```bash
ng new preload-strategy-demo --routing --style=css
cd preload-strategy-demo
```

### 2. Create Components and Modules
```bash
ng generate component home
ng generate module about --route about --module app.module
ng generate module contact --route contact --module app.module
```

### 3. Create Custom Preloading Strategy Service
```ts
// custom-preloading.service.ts
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }
}
```

### 4. Update Routes with Preloading Config
```ts
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomPreloadingService } from './custom-preloading.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { preload: true } // This will be preloaded
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    data: { preload: false } // This will NOT be preloaded
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingService })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

---

## 🎯 Use Cases

1. **Improve UX in Large Apps:** Preload only high-priority routes.
2. **Role-based Preloading:** Preload modules only for certain users.
3. **Network-aware Preloading:** Skip preloading on slow connections.

---

## ▶ Running the Project
```bash
ng serve
```
Visit:
- `/` → Home (Eager-loaded)
- `/about` → Lazy-loaded but preloaded in background
- `/contact` → Lazy-loaded only when visited
```

---

✅ **This project covers:**  
- NoPreloading  
- PreloadAllModules  
- Custom Preloading  