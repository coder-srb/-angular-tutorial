import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickColor]',  // Attribute selector 
  standalone: true  // standalone directive
})
export class ClickColorDirective {
  private isRed = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.isRed = !this.isRed;
    if(this.isRed){
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }else{
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }

}
