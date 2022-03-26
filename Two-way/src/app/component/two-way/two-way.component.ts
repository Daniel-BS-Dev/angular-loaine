import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  name: string = 'abc';

  person: any = {
    name: 'Daniel',
    age: 30
  }

  nameCourse: string = 'Daniel';
  
  constructor() { }

  ngOnInit(): void {
  }

}
