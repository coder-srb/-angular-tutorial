# 🧠 Angular Routing: Lazy Loading Project

## ✅ 2. LAZY LOADING PROJECT
#### What is Lazy Loading in Angular?
Lazy loading is a design pattern in Angular used to improve application performance by loading feature modules only when they’re needed — that is, on-demand, instead of during the initial app load.

##### 🧠 Simple Definition:
Lazy Loading means deferring the loading of a module (and its associated components, services, etc.) until the user navigates to a route that requires it.

### 🔹 Step 1: Create Project
```bash
ng new lazy-routing-demo
cd lazy-routing-demo
```

### 🔹 Step 2: Generate Lazy-Loadable Modules
```bash
ng generate module features/home --route home --module app.module
ng generate module features/about --route about --module app.module
ng generate module features/dashboard --route dashboard --module app.module
```

> This will:
> - Create each module
> - Add routing automatically
> - Setup lazy loading in `app.routes.ts` (if using --standalone mode)
> - Or in `app-routing.module.ts` using `loadChildren`

### 🔹 Step 3: Check `app-routing.module.ts`
```ts
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
```

### 🔹 Step 4: Update `app.component.html`
```html
<h1>Lazy Loading Demo</h1>
<nav>
  <a routerLink="/home">Home</a> |
  <a routerLink="/about">About</a> |
  <a routerLink="/dashboard">Dashboard</a>
</nav>
<hr />
<router-outlet></router-outlet>
```

### ✅ Done! Run:
```bash
ng serve
```