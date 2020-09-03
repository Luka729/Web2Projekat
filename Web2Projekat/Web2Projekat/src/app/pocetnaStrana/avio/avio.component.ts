import { Component, OnInit } from '@angular/core';
import { AvioEntiteti } from 'src/app/entiteti/avio-entiteti';
import { LetEntiteti } from 'src/app/entiteti/let-entiteti';
import { AvioServisi } from 'src/app/servisi/avio-servisi';
import { LetServisi } from 'src/app/servisi/let-servisi';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';

@Component({
  selector: 'app-avio',
  templateUrl: './avio.component.html',
  styleUrls: ['./avio.component.css']
})
export class AvioComponent implements OnInit {
  allFlightsCompany: Array<AvioEntiteti>;
  allFlights: Array<LetEntiteti>;
  lista: Array<any>;
  constructor(servisAvio: AvioServisi, servisLetovi: LetServisi, public service: AvioKompanijaService) 
  {
    this.ListaAviokompanija();
    this.allFlights = servisLetovi.loadFlights();
   }

  ngOnInit(): void {
  }
  ListaAviokompanija() :void{
    this.service.ListaAvioKompanija().subscribe(
      (res: any) => {   
        this.lista=res;  
      },
      err => {
        console.log(err);
      }
    );
  }
}
