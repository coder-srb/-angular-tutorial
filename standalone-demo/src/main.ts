import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserFormsComponent } from './app/user-forms/user-forms.component';


// platformBrowserDynamic().bootstrapModule(AppModule)
bootstrapApplication(UserFormsComponent)   // to bind component to the DOM not module
  .catch(err => console.error(err));
