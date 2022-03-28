import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-elvis',
  templateUrl: './directive-elvis.component.html',
  styleUrls: ['./directive-elvis.component.css']
})
export class DirectiveElvisComponent implements OnInit {

  person: any = {
    name: 'daniel',
    response: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
