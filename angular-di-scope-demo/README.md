# Angular DI Scope Demo (Singleton, Scoped, Transient)

This project demonstrates all three common Angular service scopes using Dependency Injection **using a unified theme and layout**:

* **Singleton Service**: `providedIn: 'root'`
* **Scoped Service**: Provided in a lazy-loaded module
* **Transient Service**: Provided in a component's `providers` array

---

## 🎨 Project Theme

This demo uses a simple UI theme with navigation links and consistent layout.
Each scope demonstrates the count increment behavior through a styled card layout.

---

## 🚀 Step-by-Step Setup Instructions

### 🟢 Step 1: Create a New Angular Project

```bash
ng new angular-di-scope-demo --standalone --routing --defaults
cd angular-di-scope-demo
```

---

## ✅ Singleton Example (Global Service)

### 📁 Step 2: Create Singleton Service and Component

```bash
ng generate component singleton/singleton --standalone
ng generate service singleton/global
```

### 🔧 Edit `global.service.ts`

```ts
@Injectable({ providedIn: 'root' })
export class GlobalService {
  count = 0;
  increment() { this.count++; }
}
```

### 🔧 Edit `singleton.component.ts`

```ts
@Component({
  selector: 'app-singleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Singleton Component</h2>
    <div class="card">
      <p>Global Count: {{ service.count }}</p>
      <button (click)="service.increment()">Increment</button>
    </div>
  `,
  styles: [`.card { border: 1px solid gray; padding: 10px; border-radius: 5px;}`]
})
export class SingletonComponent {
  constructor(public service: GlobalService) {}
}
```

---

## 🔵 Transient Example (Component Service)

### 📁 Step 3: Create Transient Service and Component

```bash
ng generate component transient/transient --standalone
ng generate service transient/local
```

### 🔧 Edit `local.service.ts`

```ts
@Injectable()
export class LocalService {
  count = 0;
  increment() { this.count++; }
}
```

### 🔧 Edit `transient.component.ts`

```ts
@Component({
  selector: 'app-transient',
  standalone: true,
  imports: [CommonModule],
  providers: [LocalService],
  template: `
    <h2>Transient Component</h2>
    <div class="card">
      <p>Local Count: {{ service.count }}</p>
      <button (click)="service.increment()">Increment</button>
    </div>
  `,
  styles: [`.card { border: 1px solid gray; padding: 10px; border-radius: 5px;}`]
})
export class TransientComponent {
  constructor(public service: LocalService) {}
}
```

---

## 🟣 Scoped Example (Lazy Module Service)

### 📁 Step 4: Create Lazy Module and Component Manually

Since `--route` CLI flag does not work with `app.routes.ts`, do it manually:

```bash
# Creates a new Angular module named 'scoped' (used for lazy loading)
ng generate module scoped

# Generates a standalone component 'ScopedComponent' under scoped folder
ng generate component scoped/scoped --standalone

# Creates a service 'ScopedService' under the scoped folder for scoped DI
ng generate service scoped/scoped
```

### 🔧 Edit `scoped.service.ts`

```ts
@Injectable()
export class ScopedService {
  count = 0;
  increment() { this.count++; }
}
```

### 🔧 Edit `scoped.component.ts`

```ts
@Component({
  selector: 'app-scoped',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Scoped Component</h2>
    <div class="card">
      <p>Scoped Count: {{ service.count }}</p>
      <button (click)="service.increment()">Increment</button>
    </div>
  `,
  styles: [`.card { border: 1px solid gray; padding: 10px; border-radius: 5px;}`]
})
export class ScopedComponent {
  constructor(public service: ScopedService) {}
}
```

### 🔧 Edit `scoped.module.ts`

```ts
@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: ScopedComponent }])],
  providers: [ScopedService],
})
export class ScopedModule {}
```

### 🛠 Manually Update `app.routes.ts`

```ts
export const routes: Routes = [
  { path: 'singleton', component: SingletonComponent },
  { path: 'transient', component: TransientComponent },
  {
    path: 'scoped',
    loadChildren: () => import('./scoped/scoped.module').then(m => m.ScopedModule)
  },
  { path: '', redirectTo: 'singleton', pathMatch: 'full' },
];
```

---

## 🔁 Step 5: Setup Main Component and Routing Config

### 📄 Edit `app.component.ts`

```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <h1>Angular DI Scope Demo</h1>
    <nav>
      <a routerLink="/singleton">Singleton</a> |
      <a routerLink="/transient">Transient</a> |
      <a routerLink="/scoped">Scoped</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`nav a { margin-right: 10px; text-decoration: none; color: blue; }`]
})
export class AppComponent {}
```

### 📄 Edit `main.ts`

```ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

---

## ✅ Run the App

```bash
ng serve
```

Visit [http://localhost:4200](http://localhost:4200)

---

## 📚 Summary Table

| Service Scope | Provided In                | Shared Scope           |
| ------------- | -------------------------- | ---------------------- |
| Singleton     | `providedIn: 'root'`       | Whole App              |
| Transient     | `providers` in component   | Per component instance |
| Scoped        | `providers` in lazy module | Per lazy-loaded module |

---

### 🧠 Useful Tip:

Open each route in separate tabs or navigate between them and click the increment button. Observe the difference in count behavior for each scope.

---
