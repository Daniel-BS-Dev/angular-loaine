import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pegando-parametro',
  templateUrl: './pegando-parametro.component.html',
  styleUrls: ['./pegando-parametro.component.css']
})
export class PegandoParametroComponent implements OnInit {

  id: string='';

  constructor(private route: ActivatedRoute) {
   
   }

  ngOnInit(): void {
    //**** essa forma se houver mudaça no id dps da inicialização meu id continua sendo o mesmo **** //
    // this.id = this.route.snapshot.params['id']; 
  
  // ****resolvendo esse problema**** //
  this.route.params.subscribe((params: any) => {
    this.id = params['id'];
  })
  }

}
