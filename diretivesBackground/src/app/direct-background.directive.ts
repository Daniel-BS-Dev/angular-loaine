import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectBackground]'
})
export class DirectBackgroundDirective {

 @Input() colorDefault: string = 'white';
 @Input() colorChange: string = 'yellow';

  // ouvindo um evento
  @HostListener('mouseenter') onMouseOver(){
    this.background= this.colorChange;
  }

  @HostListener('mouseleave') onMouseLeave(){
   this.background= this.colorDefault;
  }

  // mudando o background
  @HostBinding('style.backgroundColor') background: string='';

  constructor() { }

  ngOnInit(): void {
    this.background = 'blue';
  }
}
