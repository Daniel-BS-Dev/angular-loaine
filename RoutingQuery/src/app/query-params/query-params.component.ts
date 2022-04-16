import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.scss']
})
export class QueryParamsComponent implements OnInit {

  page: number=0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  // obtendo o paramento da url
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: any)=>{
      this.page = queryParams['pagina'];
    })
  }

  // butão para proxima pagina
  nextPage(){
   this.router.navigate(['/course'], {queryParams: {'pagina': ++this.page}})
  }

}
