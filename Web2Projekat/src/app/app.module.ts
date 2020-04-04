import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogovanjeComponent } from './pocetnaStrana/logovanje/logovanje.component';
import { RegistrovanjeComponent } from './pocetnaStrana/registrovanje/registrovanje.component';
import { PadajuciMenijiComponent } from './pocetnaStrana/padajuci-meniji/padajuci-meniji.component';

@NgModule({
  declarations: [
    AppComponent,
    LogovanjeComponent,
    RegistrovanjeComponent,
    PadajuciMenijiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
