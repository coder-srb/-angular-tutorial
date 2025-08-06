import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopedService } from './scoped.service';
import { RouterModule } from '@angular/router';
import { ScopedComponent } from './scoped/scoped.component';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([{ path: '', component: ScopedComponent }])],
  providers: [ScopedService],
})
export class ScopedModule { }
