import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudantService {

  studants: any[] = [
    {id: 1, name: 'Pedro', age: 24, email: "p@gmail.com"},
    {id: 2, name: 'Daniel', age: 25, email: "daniel@gmail.com"},
    {id: 3, name: 'Paulo', age: 30, email: "paulo@gmail.com"},
    {id: 4, name: 'Marcos', age: 15, email: "marcos@gmail.com"}
  ]

  constructor() { }

  getStudants(){
    return this.studants;
  }

  getStudant(id: number){
    for(let i =0; i < this.studants.length; i++){
      let studant = this.studants[i];
      if(studant.id == id){
        return studant;
      }
    }
    return null;
  }
}
