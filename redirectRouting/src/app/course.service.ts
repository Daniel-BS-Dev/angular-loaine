import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: any[]=[];

  constructor() { }

  getCourses(){
    return [
      {id:1, name: 'Java'},
      {id:2, name: 'Angular'}
    ]
  }

  hasCourse(id : number){
    this.courses = this.getCourses();
    for(let i=0; i< this.courses.length; i++){
      let course = this.courses[i];
      if(course.id == id){
        return course;
      }
    }
    return null;
  }
}
