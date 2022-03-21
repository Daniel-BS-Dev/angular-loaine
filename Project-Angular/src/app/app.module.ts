import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { CursosModule } from './cursos/cursos.module';



@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule, // como eu criei module novo tenho que fazer o import aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
