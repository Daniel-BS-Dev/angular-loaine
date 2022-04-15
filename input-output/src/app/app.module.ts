import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FatherComponent } from './component/father/father.component';
import { SonComponent } from './component/father/son/son.component';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
