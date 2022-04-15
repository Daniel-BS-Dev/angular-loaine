import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycoursesService {

  listNewCurseCreated = new EventEmitter();

  listCourse: string[] = ['Java', 'C#','PHP', 'C++','C'];

  constructor() { }

  onNewCourse(course: string){
    this.listCourse.unshift(course);
    this.listNewCurseCreated.emit(course);
  }
}
