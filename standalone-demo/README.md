# Standalone Angular App (No NgModule)

This project demonstrates a minimal Angular app built using **only a standalone component**, without any `AppModule`.

## 🚀 Features

- Uses `bootstrapApplication()` instead of `platformBrowserDynamic()`
- No AppModule or AppComponent involved
- Clean, beginner-friendly setup using one component

## 🛠️ Steps to Reproduce

### 1. Create the Project
```bash
ng new standalone-demo --defaults --skip-tests
cd standalone-demo
```

### 2. Generate a Standalone Component
```bash
ng generate component user-form --standalone
```

### 3. Replace `main.ts`
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { UserFormComponent } from './app/user-form/user-form.component';

bootstrapApplication(UserFormComponent)
  .catch(err => console.error(err));
```

### 4. mention the standalone componet's selector in the body of index.html 
```bash
<body>
  <app-user-forms></app-user-forms>
</body>
```

### 5. Run the App
```bash
ng serve
```
