import { TipesComponent } from './tipes/tipes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    TipesComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
