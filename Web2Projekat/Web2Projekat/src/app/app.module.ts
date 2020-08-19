import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogovanjeComponent } from './pocetnaStrana/logovanje/logovanje.component';
import { RegistrovanjeComponent } from './pocetnaStrana/registrovanje/registrovanje.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentacarComponentComponent } from './pocetnaStrana/rentacar-component/rentacar-component.component';
import { VozilaIspisComponent } from './pocetnaStrana/vozila-ispis/vozila-ispis.component';
import { AvioComponent } from './pocetnaStrana/avio/avio.component';
import { LetoviIspisComponent } from './pocetnaStrana/letovi-ispis/letovi-ispis.component';
import { PocetnaStranicaComponent } from './pocetnaStrana/pocetna-stranica/pocetna-stranica.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LogovanjeComponent,
    RegistrovanjeComponent,
    RentacarComponentComponent,
    VozilaIspisComponent,
    AvioComponent,
    LetoviIspisComponent,
    PocetnaStranicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
