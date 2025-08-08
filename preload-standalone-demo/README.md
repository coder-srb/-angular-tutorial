
# Preloading Strategy in a Standalone Angular Project – Key Differences from Non-Standalone

This guide explains the **major file changes** you need to make when implementing `PreloadingStrategy` in a **standalone Angular project**, compared to a traditional **non-standalone** (NgModule-based) project.

---

## 1. **Routing Setup**

### **Non-Standalone Project**
In a non-standalone project, routes are typically defined inside `app-routing.module.ts`:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

---

### **Standalone Project**
In a standalone project, routes are **not** registered in a module but directly in `main.ts` (or a separate `app.routes.ts` file).

**Example (`main.ts`):**
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, { preloadingStrategy: PreloadAllModules })
  ]
});
```

**Example (`app.routes.ts`):**
```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'feature', loadComponent: () => import('./feature/feature.component').then(m => m.FeatureComponent) }
];
```

---

## 2. **Component Loading**

- **Non-Standalone:** Lazy loading uses `loadChildren` with a module.
- **Standalone:** Lazy loading can use **`loadComponent`** directly, without creating an NgModule.

```ts
// Standalone lazy-loaded component route
{
  path: 'about',
  loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
}
```

---

## 3. **Custom Preloading Strategy**

### Non-Standalone Example
```ts
@Injectable({ providedIn: 'root' })
export class CustomPreloading implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data?.['preload'] ? load() : of(null);
  }
}
```

Registered in:
```ts
RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloading })
```

---

### Standalone Example
Same service class, but registration happens in `bootstrapApplication`:

```ts
import { CustomPreloading } from './custom-preloading.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, { preloadingStrategy: CustomPreloading })
  ]
});
```

---

## 4. **Key Differences Summary Table**

| Feature                       | Non-Standalone (Modules)                        | Standalone (No Modules)                              |
|--------------------------------|--------------------------------------------------|------------------------------------------------------|
| Route Definition               | Inside `AppRoutingModule`                       | Inside `app.routes.ts` (or inline in `main.ts`)      |
| Router Registration            | `RouterModule.forRoot(...)` in `@NgModule`      | `provideRouter(...)` in `bootstrapApplication`       |
| Lazy Loading (Modules)         | `loadChildren: () => import('...module')`       | N/A (use `loadComponent` for standalone components)  |
| Lazy Loading (Components)      | Requires wrapping module                        | Direct `loadComponent`                              |
| Preloading Strategy Injection  | In `RouterModule.forRoot()`                     | In `provideRouter()`                                 |
| Bootstrap Point                | `AppModule`                                     | `main.ts` directly                                   |

---

## 5. **Example Route with Preloading Metadata in Standalone**
```ts
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    data: { preload: true }
  }
];
```

---

With this structure, **preloading in standalone apps** works exactly like in module-based apps — the main change is **where and how routes and providers are registered**.
