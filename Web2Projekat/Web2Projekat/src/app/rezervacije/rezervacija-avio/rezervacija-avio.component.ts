import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';

@Component({
  selector: 'app-rezervacija-avio',
  templateUrl: './rezervacija-avio.component.html',
  styleUrls: ['./rezervacija-avio.component.css']
})
export class RezervacijaAvioComponent implements OnInit {

  lista: Array<any>;
  listaLetova: Array<any>



  constructor(private route: ActivatedRoute, private router: Router, public service: AvioKompanijaService) {
    this.ListaAviokompanija();
  }

  ngOnInit(): void {
  }

  ucitajLetove(letovi: any): void {
    this.router.navigateByUrl('/letovi-ispis/' + letovi);
  }

  ucitajStranicuZaIzborSedista(lett: any): void{
    this.router.navigateByUrl('/odabir-sedista/' + lett);
  }

  ListaAviokompanija(): void {
    this.service.ListaAvioKompanija().subscribe(
      (res: any) => {
        this.lista = res;
      },
      err => {
        console.log(err);
      }
    );
  }


  onSubmit() {
    this.service.dobaviSveLetove().subscribe(
      (res: any) => {
        //this.service.RezervacijaForm.reset();
        //this.router.navigateByUrl('/profil-avio-admin/');
        this.listaLetova = res;
        console.log(this.listaLetova);
        console.log("letovi su ispisani");
      },
      err => {
        console.log(err);
        console.log("letovi nisu ispisani");
      }
    );
  }
}
