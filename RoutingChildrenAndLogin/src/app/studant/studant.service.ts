import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudantService {

  studants: any[] = [
    {name: 'Pedro', age: 24, email: "p@gmail.com"},
    {name: 'Daniel', age: 24, email: "p@gmail.com"},
    {name: 'Paulo', age: 24, email: "p@gmail.com"},
    {name: 'Marcos', age: 24, email: "p@gmail.com"}
  ]

  constructor() { }

  getStudants(){
    return this.studants;
  }
}
