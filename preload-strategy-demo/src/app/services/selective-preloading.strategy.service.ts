import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    
    const shouldPreload = route.data && route.data['preload'];
    if(shouldPreload){
      console.log(`[Preloading]: ${route.path}`);
      return load(); // Preload the module
    }

    return of(null); // Default to not preloading
  }
}
