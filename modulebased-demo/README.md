# Modulebased Angular App

This project showcases traditional module-based flow

## 🚀 Features

- Uses `AppModule` and `AppComponent` (traditional)

## 🛠️ Steps to Reproduce

### 1. Create the Project
```bash
ng new modulebased-demo
cd modulebased-demo
```

### 2. Generate a Component
```bash
ng generate component user-card
```

### 3. mention the standalone componet's selector in `app.component.html`
```html
<app-user-card></app-user-card>
```

### 4. Run the App
```bash
ng serve
```