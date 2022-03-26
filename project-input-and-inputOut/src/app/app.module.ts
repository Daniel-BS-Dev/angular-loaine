import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './component/counter/counter.component';
import { DetailsComponent } from './component/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
