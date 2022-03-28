import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveNgIfComponent } from './directive-ng-if/directive-ng-if.component';
import { DirectiveNgSwitchComponent } from './directive-ng-switch/directive-ng-switch.component';
import { DirectiveNgForComponent } from './directive-ng-for/directive-ng-for.component';
import { DirectiveNgClassComponent } from './directive-ng-class/directive-ng-class.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgIfComponent,
    DirectiveNgSwitchComponent,
    DirectiveNgForComponent,
    DirectiveNgClassComponent,
    NgContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
