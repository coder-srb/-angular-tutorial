
# 🚀 Angular Standalone vs Traditional Components, Directives & Pipes

Angular (v14+) introduced **Standalone Components, Directives, and Pipes**, allowing us to write cleaner, more modular code without always relying on NgModules.

---

## 📌 What Are Standalone APIs?

Standalone components/directives/pipes are **self-contained** Angular features that can be used without declaring them in an NgModule.

---

## ✅ Standalone Approach

### 🧩 Component Example
```ts
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, AnotherStandaloneComponent, StandaloneDirective],
  template: `<h2 appClickColor>Hello Standalone</h2>`
})
export class DemoComponent {}
```

### 🧩 Directive Example
```ts
@Directive({
  selector: '[appClickColor]',
  standalone: true
})
export class ClickColorDirective {
  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
```

### ✔️ Use In:
- Other **standalone components** via `imports`
- **NgModules** (optional)

---

## 🏗️ Traditional (Non-Standalone) Approach

### 🧩 Component/Directive Declaration
```ts
@Directive({
  selector: '[appClickColor]'
})
export class ClickColorDirective {
  ...
}
```

### 📦 Module Setup
```ts
@NgModule({
  declarations: [ClickColorDirective, MyComponent],
  exports: [ClickColorDirective, MyComponent]
})
export class SharedModule {}
```

### ✔️ Use In:
Import the module in any other component/module:
```ts
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  template: `<p appClickColor>Hello from traditional!</p>`
})
export class HomeComponent {}
```

---

## 🔄 Summary Comparison

| Feature               | `standalone: true` | Importable Directly | Needs Module?       |
|----------------------|--------------------|----------------------|----------------------|
| Standalone Component | ✅ Yes             | ✅ Yes               | ❌ No (optional)     |
| Regular Component    | ❌ No              | ❌ No                | ✅ Yes (via NgModule)|
| Standalone Directive | ✅ Yes             | ✅ Yes               | ❌ No (optional)     |
| Regular Directive    | ❌ No              | ❌ No                | ✅ Yes (via NgModule)|

---

## 🧠 When to Use What?

| Use Case                             | Recommendation      |
|-------------------------------------|---------------------|
| New Angular app (v16+)              | ✅ Use standalone    |
| Reusable libraries / shared modules | 🏗️ Use traditional   |
| Quick POC or feature module         | ✅ Use standalone    |

---

## 📝 Tip:
Use `standalone` for faster development and better modularity. Only fall back to `NgModule` when grouping many declarations together or when building legacy/shared libraries.

---

## 🧪 Example Usage Demo
- `StandaloneComponent` imports a `StandaloneDirective`
- `TraditionalComponent` uses a directive declared in `SharedModule`

