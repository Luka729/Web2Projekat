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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthServiceConfig,GoogleLoginProvider,SocialLoginModule} from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TokenInterceptor } from './auth/tokenInterceptor';
import { ToastrModule } from 'ngx-toastr';
import { ProfilKorisnikaComponent } from './naprednaPocetna/profil-korisnika/profil-korisnika.component';
import { KorisnikInfoComponent } from './naprednaPocetna/korisnik-info/korisnik-info.component';

let config = new AuthServiceConfig([
  {
     id: GoogleLoginProvider.PROVIDER_ID,
     provider: new GoogleLoginProvider("819577468977-qal4ja5eb8ca3ggigol588ej90qnm0fg.apps.googleusercontent.com")
  }
]);
export function provideConfig()
 {
    return config;
 }

@NgModule({
  declarations: [
    AppComponent,
    LogovanjeComponent,
    RegistrovanjeComponent,
    RentacarComponentComponent,
    VozilaIspisComponent,
    AvioComponent,
    LetoviIspisComponent,
    PocetnaStranicaComponent,
    ProfilKorisnikaComponent,
    KorisnikInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar:true
    }),
    SocialLoginModule.initialize(config)
    ],
    providers: [
      {
        provide: AuthServiceConfig,
        useFactory:provideConfig
      }
       
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
