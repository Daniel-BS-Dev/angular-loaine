import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ServicesService {
 
  // com essa linha de codigo eu percebo quando houve uma mudança
  emitCourseCreated = new EventEmitter<string>();

   courses: string [] = ["java", "PHP","C#","Angular"];

  constructor() {}

  getCursos() {
    return this.courses;
  }

  addCourse(course: string){
    this.courses.unshift(course);
    this.emitCourseCreated.emit(course);
  }
}
