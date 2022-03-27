import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-for',
  templateUrl: './directive-ng-for.component.html',
  styleUrls: ['./directive-ng-for.component.css']
})
export class DirectiveNgForComponent implements OnInit {

courses: string[] = ["Angular2", "Java", "Phonegap"];

  constructor() { }

  ngOnInit() {
    for(let i=0; i<this.courses.length; i++){
      let course = this.courses[i];
    }
  }

}
