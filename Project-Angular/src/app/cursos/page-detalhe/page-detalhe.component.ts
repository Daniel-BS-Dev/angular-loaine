import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-detalhe',
  templateUrl: './page-detalhe.component.html',
  styleUrls: ['./page-detalhe.component.scss']
})
export class PageDetalheComponent implements OnInit {

  urlbase : string;

  cursos: string[] = ['Java', 'C#', 'C++', 'C', 'Javascript',];

  constructor() {
    this.urlbase = "https://daniel.com.br";
    
   }

  ngOnInit(): void {
  }

}
