import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses: any[] = [];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.courses = this.service.getCourses();
  }

}
