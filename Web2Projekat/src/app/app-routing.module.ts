import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { PadajuciMenijiComponent } from './pocetnaStrana/padajuci-meniji/padajuci-meniji.component';
import { LogovanjeComponent } from './pocetnaStrana/logovanje/logovanje.component';
import { RegistrovanjeComponent } from './pocetnaStrana/registrovanje/registrovanje.component';


const routes: Routes = [
  {
    path: "padajuci-meniji",
    component: PadajuciMenijiComponent
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
    component: PadajuciMenijiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
