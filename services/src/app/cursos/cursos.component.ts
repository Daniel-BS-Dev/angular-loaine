import { Component, OnInit } from '@angular/core';

import { ServicesService } from './services.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  courses : string[]= [];
  course : string;

  constructor(private service:  ServicesService) {
    
   }

  ngOnInit(): void {
    this.courses = this.service.getCursos();
    this.service.emitCourseCreated.subscribe( course => {
       this.course = course;
    })
  }

  addCourse(course: string){
    this.service.addCourse(course);
  }

}
