import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogovanjeComponent } from './pocetnaStrana/logovanje/logovanje.component';
import { RegistrovanjeComponent } from './pocetnaStrana/registrovanje/registrovanje.component';
import { RentacarComponentComponent } from './pocetnaStrana/rentacar-component/rentacar-component.component';
import { VozilaIspisComponent } from './pocetnaStrana/vozila-ispis/vozila-ispis.component';
const routes: Routes = [
  {
    path: "ispis-vozila",
    component: VozilaIspisComponent
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
    path: '',
    component: RentacarComponentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
