import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogovanjeComponent } from './pocetnaStrana/logovanje/logovanje.component';
import { RegistrovanjeComponent } from './pocetnaStrana/registrovanje/registrovanje.component';
import { RentacarComponentComponent } from './pocetnaStrana/rentacar-component/rentacar-component.component';
import { VozilaIspisComponent } from './pocetnaStrana/vozila-ispis/vozila-ispis.component';
import { LetoviIspisComponent } from './pocetnaStrana/letovi-ispis/letovi-ispis.component';
import { AvioComponent } from './pocetnaStrana/avio/avio.component';
import { PocetnaStranicaComponent } from './pocetnaStrana/pocetna-stranica/pocetna-stranica.component';
import { ProfilKorisnikaComponent } from './naprednaPocetna/profil-korisnika/profil-korisnika.component';
import { IzmenaKorisnikaComponent } from './naprednaPocetna/izmena-korisnika/izmena-korisnika.component';
import { ProfilAvioAdminComponent } from './AvioPocetna/profil-avio-admin/profil-avio-admin.component';
import { ProfilCarAdminComponent } from './CarPocetna/profil-car-admin/profil-car-admin.component';
import { ProfilMainAdminComponent } from './MainAdminPocetna/profil-main-admin/profil-main-admin.component';
import { RegistrovanjeAvioComponent } from './MainAdminPocetna/registrovanje-avio/registrovanje-avio.component';
import { RegistrovanjeRentACarComponent } from './MainAdminPocetna/registrovanje-rent-a-car/registrovanje-rent-a-car.component';
const routes: Routes = [
  {
    path: "ispis-vozila",
    component: VozilaIspisComponent
  },
  {
    path: "ispis-letova",
    component: LetoviIspisComponent
  },

  {
    path: "logovanje",
    component: LogovanjeComponent
  },

  {
    path:"registrovanje",
    component:RegistrovanjeComponent
  },
  {
    path: 'rent-a-car',
    component: RentacarComponentComponent
  },
  {
    path: 'avio-component',
    component: AvioComponent
  },
  {
    path: '',
    component:PocetnaStranicaComponent
  },
  {
    path: 'profil-korisnika/:userNameProvera',
    component:ProfilKorisnikaComponent
  },
  {
    path:'izmena-korisnika/:username',
    component:IzmenaKorisnikaComponent
  },
  {
    path:'profil-avio-admin/:username',
    component:ProfilAvioAdminComponent
  },
  {
    path:'profil-car-admin/:username',
    component:ProfilCarAdminComponent
  },
  {
    path:'profil-main-admin/:username',
    component:ProfilMainAdminComponent
  },
  {
    path: 'registrovanje-avio',//username
    component:RegistrovanjeAvioComponent
  },
  {
    path: 'registrovanje-rent-a-car',//username
    component:RegistrovanjeRentACarComponent
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
