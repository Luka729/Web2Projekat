import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogovanjeComponent } from './pocetnaStrana/logovanje/logovanje.component';
import { RegistrovanjeComponent } from './pocetnaStrana/registrovanje/registrovanje.component';
import { RentacarComponentComponent } from './pocetnaStrana/rentacar-component/rentacar-component.component';
import { VozilaIspisComponent } from './pocetnaStrana/vozila-ispis/vozila-ispis.component';
import { LetoviIspisComponent } from './pocetnaStrana/letovi-ispis/letovi-ispis.component';
import { AvioComponent } from './pocetnaStrana/avio/avio.component';
import { PocetnaStranicaComponent } from './pocetnaStrana/pocetna-stranica/pocetna-stranica.component';
import { VerifikacijaComponent } from './pocetnaStrana/verifikacija/verifikacija.component';
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
    path: 'verifikacija',
    component: VerifikacijaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
