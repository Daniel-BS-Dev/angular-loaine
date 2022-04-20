import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudantService } from '../studant.service';

@Component({
  selector: 'app-studant-details',
  templateUrl: './studant-details.component.html',
  styleUrls: ['./studant-details.component.scss']
})
export class StudantDetailsComponent implements OnInit {

  studant: any;
  id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private service: StudantService) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
     this.id = params['id'];

     this.studant = this.service.getStudant(this.id);
    });
  }

  editContact(){
    // encaminhando o meu usuario para a pagina de edite
    this.router.navigate(['/studants', this.studant.id, 'edit']);
  }

}
