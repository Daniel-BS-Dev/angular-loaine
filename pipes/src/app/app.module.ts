import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { PipesCustumizadoPipe } from './pipes-custumizado.pipe';

// importes que eu vou precisar
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ServiceService } from './service.service';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    PipesCustumizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID, // formatando preço com uma virgula
      useValue:'pt-BR',
    
    },
    ServiceService, // usando a formatação para um service
    {
      provide: LOCALE_ID,
      deps: [ServiceService],
      useFactory: (settingService) => settingService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
