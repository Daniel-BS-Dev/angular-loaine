import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-switch',
  templateUrl: './directive-ng-switch.component.html',
  styleUrls: ['./directive-ng-switch.component.css']
})
export class DirectiveNgSwitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}
