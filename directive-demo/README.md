
# 📘 Angular `@Directive` Guide

The `@Directive` decorator in Angular is used to create custom behavior that can be applied to elements in the DOM.

---

## 🧠 What is `@Directive`?

`@Directive` is a decorator that marks a class as an Angular directive. Directives **do not have their own template**. They are used to:

- Change the appearance or behavior of an existing element
- React to user events (hover, click, etc.)
- Manipulate DOM styles or properties
- Add custom logic to HTML elements

---
## 🟣 2. Generate a Custom Directive
```bash
ng generate directive directives/hover-highlight
```

## 🧩 Basic Syntax

```ts
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirective {
  constructor() {
    // logic
  }
}
```

---

## 📌 Common Use Case: Attribute Directive

### Example: `ClickColorDirective`

```ts
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickColor]',
  standalone: true
})
export class ClickColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }
}
```

### Usage in Template

```html
<p appClickColor>Click me to turn red!</p>
```

---

## 🔄 Directive vs Component

| Feature           | Directive       | Component          |
|------------------|------------------|--------------------|
| Has template?     | ❌ No            | ✅ Yes              |
| Used as selector? | `[attr]`         | `<tag>`             |
| Purpose           | Behavior logic   | UI + logic          |

---

## 🎯 Use Cases for `@Directive`

- Hover effects
- Click behaviors
- Dynamic styling
- Input validation
- Reusable behavioral patterns

---

## 🧠 Best Practices

- Always use `Renderer2` and `ElementRef` for safe DOM manipulation.
- Prefix your selector (e.g., `appClickColor`) to avoid naming collisions.
- Keep directives small and focused on one behavior.

---

## 📦 Additional Features

- Use `@Input()` to pass values into your directive
- Use `@HostListener()` to handle DOM events
- Use `@HostBinding()` to bind class, style, or attributes dynamically

---

## ✅ Summary

The `@Directive` decorator is a powerful way to extend HTML with custom behaviors in Angular. It's lean, reusable, and makes your templates more expressive and modular.

> Use it when you want to **add logic to existing elements** without creating new components.
