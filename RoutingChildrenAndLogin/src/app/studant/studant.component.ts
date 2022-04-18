import { Component, OnInit } from '@angular/core';
import { StudantService } from './studant.service';

@Component({
  selector: 'app-studant',
  templateUrl: './studant.component.html',
  styleUrls: ['./studant.component.scss']
})
export class StudantComponent implements OnInit {

  listStudants: any[] = [];

  constructor(private service: StudantService) { }

  ngOnInit(): void {
    this.listStudants = this.service.getStudants();
  }


}
