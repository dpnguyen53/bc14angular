import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightLight]',
})
export class HightLightDirective {
  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = 'blue';
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') eventHover() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') eventLeave() {
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'pink');
  }
}
