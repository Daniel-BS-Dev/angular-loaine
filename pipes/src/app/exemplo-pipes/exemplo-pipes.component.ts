import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

   book: any = {
     title: 'Learning JavaScript Data Strunctures and Algorithms',
     rating: 4.5432,
     numberOfPage: 314,
     price: 44.99,
     date: new Date(2016, 5, 23),
     url: 'http://a.co/glgjpRP'
   
    }

  constructor() { }

  ngOnInit(): void {
  }

}
