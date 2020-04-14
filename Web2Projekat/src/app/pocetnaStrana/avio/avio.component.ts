import { Component, OnInit } from '@angular/core';
import { AvioEntiteti } from 'src/app/entiteti/avio-entiteti';
import { LetEntiteti } from 'src/app/entiteti/let-entiteti';
import { AvioServisi } from 'src/app/servisi/avio-servisi';
import { LetServisi } from 'src/app/servisi/let-servisi';

@Component({
  selector: 'app-avio',
  templateUrl: './avio.component.html',
  styleUrls: ['./avio.component.css']
})
export class AvioComponent implements OnInit {
  allFlightsCompany: Array<AvioEntiteti>;
  allFlights: Array<LetEntiteti>;
  constructor(servisAvio: AvioServisi, servisLetovi: LetServisi) 
  {
    this.allFlightsCompany = servisAvio.loadFlightCompany();
    this.allFlights = servisLetovi.loadFlights();
   }

  ngOnInit(): void {
  }

}
