import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { DisplayPlayersComponent } from './app/display-players/display-players.component';


bootstrapApplication(DisplayPlayersComponent)
  .catch(err => console.error(err));
