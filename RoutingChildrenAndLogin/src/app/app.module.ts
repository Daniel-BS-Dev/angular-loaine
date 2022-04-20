import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
//import { StudantModule } from './studant/studant.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    // StudantModule, // importando o modulo de studant 
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
