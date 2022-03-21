import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-page-detalhe',
  templateUrl: './page-detalhe.component.html',
  styleUrls: ['./page-detalhe.component.scss']
})
export class PageDetalheComponent implements OnInit {

  urlbase : string;

  cursos: string[];

  constructor(private service: CursosService) {
    this.urlbase = "https://daniel.com.br";
    
    this.cursos = this.service.getCursos();
   }

  ngOnInit(): void {
  }

  

}
