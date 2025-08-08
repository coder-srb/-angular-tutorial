
# Angular Dynamic Route Parameters – Quick Reference

This guide covers the **four main ways** to access dynamic route parameters in Angular.

---

## 1. `ActivatedRoute.snapshot.params`
- **Type:** `Params` (object)
- **Description:** Directly accesses route parameters as key-value pairs from the **static snapshot** of the route when the component was created.
- **When to use:** When you **do not expect** the parameter to change while the component is active.
- **Example:**
```ts
const id = this.route.snapshot.params['id'];
```

---

## 2. `ActivatedRoute.snapshot.paramMap`
- **Type:** `ParamMap`
- **Description:** Similar to `snapshot.params`, but uses a `ParamMap` object with helpful methods like `.get()`.
- **When to use:** When you prefer a more type-safe, method-based access to parameters.
- **Example:**
```ts
const id = this.route.snapshot.paramMap.get('id');
```

---

## 3. `ActivatedRoute.params` *(Observable)*
- **Type:** `Observable<Params>`
- **Description:** Emits route parameters as an object every time they change.
- **When to use:** When the same component instance stays active but the route parameter changes (e.g., navigating from `/user/1` to `/user/2` without destroying the component).
- **Example:**
```ts
this.route.params.subscribe(params => {
  const id = params['id'];
});
```

---

## 4. `ActivatedRoute.paramMap` *(Observable)*
- **Type:** `Observable<ParamMap>`
- **Description:** Observable version of `snapshot.paramMap`, provides a `ParamMap` object for more structured parameter access.
- **When to use:** Same as `params`, but when you want `.get()` method instead of direct indexing.
- **Example:**
```ts
this.route.paramMap.subscribe(paramMap => {
  const id = paramMap.get('id');
});
```

---

## Quick Comparison Table

| Method                               | Type               | Reactive | Access Style       | Parameter Changes Trigger Update? |
|--------------------------------------|--------------------|----------|--------------------|------------------------------------|
| `snapshot.params`                    | `Params` (object)  | ❌ No    | `params['id']`     | ❌ No                              |
| `snapshot.paramMap`                  | `ParamMap` object  | ❌ No    | `paramMap.get('id')`| ❌ No                              |
| `params` (Observable)                | `Observable<Params>`| ✅ Yes   | `params['id']`     | ✅ Yes                             |
| `paramMap` (Observable)              | `Observable<ParamMap>`| ✅ Yes | `paramMap.get('id')`| ✅ Yes                             |

---

**Tip:**  
- Use **snapshot** when parameter changes won’t happen without recreating the component.  
- Use **observable** versions when parameters can change while staying in the same component instance.

