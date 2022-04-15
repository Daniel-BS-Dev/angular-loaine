import { MycoursesService } from './../mycourses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  myListCourse: string[] = [];

  constructor(private service: MycoursesService) { }

  ngOnInit(): void {
    this.myListCourse = this.service.listCourse;
  }

  onNewCourse(course: string){
    this.service.onNewCourse(course);
  }

}
