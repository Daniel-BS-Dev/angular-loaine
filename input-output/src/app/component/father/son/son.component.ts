import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
// recebe a infromação
@Input() nameSon: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
