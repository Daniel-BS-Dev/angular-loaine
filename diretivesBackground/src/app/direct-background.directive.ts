import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectBackground]'
})
export class DirectBackgroundDirective {

  // ouvindo um evento
  @HostListener('mouseenter') onMouseOver(){
    this.background='yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
   this.background='white';
  }

  // mudando o background
  @HostBinding('style.backgroundColor') background: string='';

  constructor() { }

}
