import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusando-input',
  templateUrl: './reusando-input.component.html',
  styleUrls: ['./reusando-input.component.css']
})
export class ReusandoInputComponent implements OnInit {

  @Input('name') nameCourse: string =''; // expondo uma variavel e, usando no two-way
  // internamente eu uso name, ixternamente nameCourse

  constructor() { }

  ngOnInit(): void {
  }

}
