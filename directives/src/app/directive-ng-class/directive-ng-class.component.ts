import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-class',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.css']
})
export class DirectiveNgClassComponent implements OnInit {

  isTrue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isTrue = !this.isTrue;
  }
}
