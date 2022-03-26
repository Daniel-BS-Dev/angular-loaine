import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
 
  url: string = "http://loiane.com";
  urlImage = "http://lorempixel.com/400/200/nature/"

  getValue(){
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
