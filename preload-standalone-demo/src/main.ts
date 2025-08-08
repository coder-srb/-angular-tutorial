import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NoPreloading, PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { routes } from './app/app.routes';
import { SelectivePreloadingStrategyService } from './app/selective-preloading-strategy.service';

bootstrapApplication(AppComponent, {
  providers: [
    // option A: No preloading
    // provideRouter(routes, withPreloading(NoPreloading)),

    // Option B: Preload all modules
    // provideRouter(routes, withPreloading(PreloadAllModules))

    // Option C: Custom preloading strategy
    provideRouter(routes, withPreloading(SelectivePreloadingStrategyService)), // Option A: No preloading
  ]
})
  .catch((err) => console.error(err));
