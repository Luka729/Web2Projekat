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
import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, AuthService } from 'angular-6-social-login';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TokenInterceptor } from './auth/tokenInterceptor';

export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('app -id')  
      },  
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('')  
      }  
    ]  
  );  
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
    PocetnaStranicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
    providers: [
      CookieService,
      {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
        },
      /*AuthService,  
      {  
        provide: AuthServiceConfig,  
        useFactory: socialConfigs  
      } */ 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
