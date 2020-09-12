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
import { RegistrovanjeAdminaComponent } from './MainAdminPocetna/registrovanje-admina/registrovanje-admina.component';
import { DodajKolaComponent } from './CarPocetna/dodaj-kola/dodaj-kola.component';
import { DodajLetComponent } from './AvioPocetna/dodaj-let/dodaj-let.component';
import { IzmenaPodatakaORACComponent } from './CarPocetna/izmena-podataka-orac/izmena-podataka-orac.component';
import { IzmenaPodatakaAKComponent } from './AvioPocetna/izmena-podataka-ak/izmena-podataka-ak.component';
import { RezervacijaKolaComponent } from './rezervacije/rezervacija-kola/rezervacija-kola.component';
import { PrikazPrijateljaComponent } from './naprednaPocetna/prikaz-prijatelja/prikaz-prijatelja.component';
import { DodajFilijaluComponent } from './CarPocetna/dodaj-filijalu/dodaj-filijalu.component';
import { IzmeniFilijaluComponent } from './CarPocetna/izmeni-filijalu/izmeni-filijalu.component';
import { RezervacijaAvioComponent } from './rezervacije/rezervacija-avio/rezervacija-avio.component';
import { IzaberiSedisteComponent } from './rezervacije/izaberi-sediste/izaberi-sediste.component';
const routes: Routes = [
  {
    path: "vozila-ispis/:servisi",
    component: VozilaIspisComponent
  },
  {
    path: "letovi-ispis/:letovi",
    component: LetoviIspisComponent
  },
  {
    path: "odabir-sedista/:lett",
    component: IzaberiSedisteComponent
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
    path:'izmena-korisnika/:userNameProvera',
    component:IzmenaKorisnikaComponent
  },
  {
    path:'profil-avio-admin/:userNameProvera',
    component:ProfilAvioAdminComponent
  },
  {
    path:'profil-car-admin/:userNameProvera',
    component:ProfilCarAdminComponent
  },
  {
    path:'profil-main-admin/:userNameProvera',
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
  {
    path: 'registrovanje-admina',//username
    component:RegistrovanjeAdminaComponent
  },
  {
    path: 'dodaj-kola/:userNameProvera',
    component:DodajKolaComponent
  },
  {
    path: 'dodaj-let/:userNameProvera',
    component:DodajLetComponent
  },
  {
    path: 'izmena-podataka-orac/:userNameProvera',
    component:IzmenaPodatakaORACComponent
  },
  {
    path: 'izmena-podataka-ak/:userNameProvera',
    component:IzmenaPodatakaAKComponent
  },
  {
    path: 'prikaz-prijatelja/:userNameProvera',
    component:PrikazPrijateljaComponent
  },
  {
    path:'rezervacija-kola/:kolaObjekat/:userNameProvera',
    component:RezervacijaKolaComponent
  },
  {
    path:'dodaj-filijalu/:userNameProvera',
    component:DodajFilijaluComponent
  },
  {
    path:'izmeni-filijalu/:id',
    component:IzmeniFilijaluComponent
  },
  {
    path:'rezervacija-avio',
    component:RezervacijaAvioComponent
  },

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
