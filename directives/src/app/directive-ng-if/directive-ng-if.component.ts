import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-if',
  templateUrl: './directive-ng-if.component.html',
  styleUrls: ['./directive-ng-if.component.css']
})
export class DirectiveNgIfComponent implements OnInit {

courses: string[] = ['java', 'C#', 'PHP'];

showCourses: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowCourses(){
    this.showCourses = !this.showCourses;
  }
}
