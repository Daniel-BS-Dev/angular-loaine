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
