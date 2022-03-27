import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliclo',
  templateUrl: './cliclo.component.html',
  styleUrls: ['./cliclo.component.css'],
})
export class ClicloComponent implements OnInit {

  @Input() initialValue: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook);
  }
}
