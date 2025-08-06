import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { DemoComponent } from './app/demo/demo.component';

bootstrapApplication(DemoComponent)
  .catch(err => console.error(err));
