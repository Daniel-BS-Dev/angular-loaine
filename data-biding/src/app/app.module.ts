import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CursosModule } from './cursos/cursos.module';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventComponent,
    
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
