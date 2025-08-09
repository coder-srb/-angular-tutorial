
| Directive          | Purpose                    | Example                                                                   |
| ------------------ | -------------------------- | ------------------------------------------------------------------------- |
| `routerLink`       | Navigation path binding    | `<a routerLink="/home">Home</a>`                                          |
| `[routerLink]`     | Dynamic navigation path    | `<a [routerLink]="['/user', id]">User</a>`                                |
| `routerLinkActive` | Apply class if link active | `<a routerLink="/home" routerLinkActive="active">Home</a>`                |
| `[queryParams]`    | Pass query parameters      | `<a [routerLink]="['/search']" [queryParams]="{q: 'angular'}">Search</a>` |
| `[fragment]`       | Pass fragment identifier   | `<a [routerLink]="['/help']" fragment="intro">Help</a>`                   |
| `[state]`          | Pass extra state data      | `<a [routerLink]="['/checkout']" [state]="{discount:10}">Checkout</a>`    |

---

# Defining Dynamic Parameters using `routerLink` in Angular Templates

In Angular, you can define **dynamic route parameters** directly in your templates using the `routerLink` directive.  
This allows you to navigate to routes with variable segments (e.g., `/users/42`) without manually constructing URLs.

---

## 1️⃣ Example Scenario

Suppose you have a route defined for user details:

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'users/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

Here, `:id` is a **dynamic parameter**.

---

## 2️⃣ Using `routerLink` with Dynamic Parameters

Inside your component template, you can pass dynamic values like this:

```html
<!-- users.component.html -->
<ul>
  <li *ngFor="let user of users">
    <a [routerLink]="['/users', user.id]">
      {{ user.name }}
    </a>
  </li>
</ul>
```

### Explanation:
- `['/users', user.id]` tells Angular to navigate to `/users/1`, `/users/42`, etc.
- The first array item is the **base route**, and the second is the **dynamic parameter**.

---

## 3️⃣ Retrieving Dynamic Parameters

In your target component, you can access the parameter using `ActivatedRoute`:

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `<h2>User ID: {{ userId }}</h2>`
})
export class UserDetailComponent implements OnInit {
  userId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
```

---

## 4️⃣ Real-World Example

If `users = [{ id: 1, name: 'Alice' }, { id: 42, name: 'Bob' }]`:

**Generated HTML:**
```html
<a href="/users/1">Alice</a>
<a href="/users/42">Bob</a>
```

When you click **Bob**, the URL becomes:
```
/users/42
```

---

## ✅ Milestone Check
- [x] Defined route with a dynamic parameter (`:id`)
- [x] Used `[routerLink]` with dynamic value
- [x] Retrieved parameter using `ActivatedRoute`

Now you can pass **any dynamic data** through your Angular routes! 🚀

---

# Understanding Multiple Ways to Read Route Parameters in Angular

## 1️⃣ Why multiple ways to read route parameters?
When you define a route like:
```ts
{ path: 'users/:id', component: UserDetailComponent }
```
`id` is a dynamic parameter. Angular provides three different approaches to read it in your component:

---

### **A) Snapshot**
```ts
this.idSnapshot = this.route.snapshot.params['id'];
```
**When to use:**  
If you only need the value once, at the moment the component is first loaded.

**Limitation:**  
If the URL changes to another `id` while still in the same component instance (Angular reuses the component instead of recreating it), snapshot won’t update — it’s a one-time read.

---

### **B) Params Observable**
```ts
this.route.params.subscribe(params => {
  this.idFromParams = params['id'];
});
```
**When to use:**  
If you want to react to changes in `id` within the same component instance (e.g., `/users/1` → `/users/2` without destroying the component).

**Data type:**  
`params` is just a plain object.

---

### **C) ParamMap Observable (Preferred)**
```ts
this.route.paramMap.subscribe((pm: ParamMap) => {
  this.idFromParamMap = pm.get('id');
});
```
**Why preferred:**
- Works like `params` but gives a `ParamMap` object with `.get()` and `.has()` — safer to use.
- Useful if your route has optional parameters.
- Handles type safety better.

---

## 2️⃣ Why show all three here?
Because it’s a **hands-on learning example** — in real projects, you’d normally pick either:
- **Snapshot** → fast & one-time
- **ParamMap** → reactive updates + safer API

This example is showing:
- Snapshot → fast & one-time
- Params → reactive updates but plain object
- ParamMap → reactive updates + safer API

---

## 3️⃣ Programmatic navigation (`goToNext`)
```ts
goToNext() {
  const nextId = Number(this.idSnapshot || this.idFromParamMap || 0) + 1;
  this.router.navigate(['/users', nextId]);
}
```
**Explanation:**  
Demonstrates how to navigate from inside a component without clicking a `<a>` or `<button>` with `routerLink`.

This will change the route parameter (`id`) and trigger the `params` / `paramMap` observables.

---

## 📌 Summary Table

| Method         | Reactive Updates | API Type  | Best Use Case |
|----------------|-----------------|-----------|--------------|
| Snapshot       | ❌ No            | Object    | One-time read |
| Params         | ✅ Yes           | Object    | Reactive updates |
| ParamMap       | ✅ Yes           | ParamMap  | Safer, reactive updates |

---
