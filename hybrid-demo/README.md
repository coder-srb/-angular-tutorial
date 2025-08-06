# Hybrid Angular App (Standalone + NgModule)

This project combines traditional module-based setup with modern standalone components.

## 🚀 Features

- Uses `AppModule` and `AppComponent` (traditional)
- Imports a `UserCardComponent` as a standalone component

## 🛠️ Steps to Reproduce

### 1. Create the Project
```bash
ng new hybrid-demo --defaults --skip-tests
cd hybrid-demo
```

### 2. Generate a Standalone Component
```bash
ng generate component user-card --standalone
```

### 3. Import Standalone Component inside `AppModule`
  - In hybrid project(standalone + modular), we can't define standalone component inside declarations but we can import them inside imports property of @ngModule

```ts
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [], ❌
  imports: [UserCardComponent], ✅
  bootstrap: []
})

```

### 4. mention the standalone componet's selector in `app.component.html`
```html
<app-user-card></app-user-card>
```

### 5. Run the App
```bash
ng serve
```