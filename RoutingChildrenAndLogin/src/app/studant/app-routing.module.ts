import { StudantFormComponent } from './studant-form/studant-form.component';
import { StudantDetailsComponent } from './studant-details/studant-details.component';
import { StudantComponent } from './studant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const studantesRoutes: Routes = [
  // declarando minhas rotas como rotas filhas. sempre vai mostrar o component pai o um dos filhos
  {path: 'studant', component: StudantComponent, children: [
    {path: 'new', component: StudantFormComponent},
    {path: ':id', component: StudantDetailsComponent},
    {path: ':id/edit', component: StudantFormComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(studantesRoutes)],
  exports: [RouterModule]
})
export class studantRoutingModule { }
// essa rota deve ser importada na meu modulo de alunos