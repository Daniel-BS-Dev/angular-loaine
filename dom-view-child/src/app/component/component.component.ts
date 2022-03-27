import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent  {

  add = 10;
  @ViewChild('campoInput') campoValorInput: ElementRef
 
  constructor() { }

  addNumber(){
    this.campoValorInput.nativeElement.value++;
  }

}
