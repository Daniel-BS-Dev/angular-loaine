# RoutingChildrenAndLogin

## module
``````
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studantRoutingModule } from './app-routing.module';
import { StudantComponent } from './studant.component';
import { StudantFormComponent } from './studant-form/studant-form.component';
import { StudantService } from './studant.service';


@NgModule({
  declarations: [
    StudantComponent,
    StudantFormComponent // importando minha rota
  ],
  imports: [
    CommonModule,
    studantRoutingModule
  ],
  exports: [],
  providers: [StudantService] // declarrando o meu service aqui eu posso usar ele apenas no meu studant

})
export class StudantModule { }
``````

## routing
````

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
export class studantRoutingModule { } // essa rota deve ser importada na meu modulo de alunos
````
