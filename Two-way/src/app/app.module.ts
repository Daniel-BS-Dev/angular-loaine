import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoWayComponent } from './component/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { ReusandoInputComponent } from './component/reusando-input/reusando-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    ReusandoInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
