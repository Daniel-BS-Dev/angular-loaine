import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCursosComponent } from './page-cursos/page-cursos.component';
import { PageDetalheComponent } from './page-detalhe/page-detalhe.component';



@NgModule({
  declarations: [
    PageCursosComponent,
    PageDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageCursosComponent // desta forma eu deixo meu component visivel para outras components
  ]
})
export class CursosModule { }
