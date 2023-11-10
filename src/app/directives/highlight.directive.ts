import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string = '';

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = '#ffff00';
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight ? this.appHighlight : '#ff0000' );
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
