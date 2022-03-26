import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNumber(){
    this.value += 1;
    this.changeValue.emit({newValue: this.value})
  }

  removeNumber(){
    this.value -= 1;
    this.changeValue.emit({newValue: this.value})
  }


}
