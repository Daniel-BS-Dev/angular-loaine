import { MycoursesService } from './../mycourses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course-created',
  templateUrl: './view-course-created.component.html',
  styleUrls: ['./view-course-created.component.css']
})
export class ViewCourseCreatedComponent implements OnInit {

  listNewCourse : string[] = [];

  constructor(private service: MycoursesService) { }

  ngOnInit(): void {
    this.service.listNewCurseCreated.subscribe(x => {
        this.listNewCourse.push(x);

      })
  }

}
