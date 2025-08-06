import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ClickColorDirective } from './click-color.directive';


@NgModule({
  declarations: [HoverHighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [ HoverHighlightDirective]
})
export class DirectivesModule { }
