import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
 // saida de dados
  nameFather : string = 'Name my Son is John';

  constructor() { }

  ngOnInit(): void {
  }

}
