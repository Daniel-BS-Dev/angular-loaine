import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value: string = '';
  ismouse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getClicou(){
    alert("Clicou em mim");
  }

 valorSalvo(valor){
  this.value = valor;
 }

 onMouseOverOut(){
   this.ismouse = !this.ismouse;
 }

  onKeyUp(event){
    console.log(event.target.value); // pegando o valor do input
  }

 

}
