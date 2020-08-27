import { Component, OnInit } from '@angular/core';
import { LetEntiteti } from 'src/app/entiteti/let-entiteti';
import { LetServisi } from 'src/app/servisi/let-servisi';

@Component({
  selector: 'app-letovi-ispis',
  templateUrl: './letovi-ispis.component.html',
  styleUrls: ['./letovi-ispis.component.css']
})
export class LetoviIspisComponent implements OnInit {
  allFlights: Array<LetEntiteti>;
  searchFlight: string;
  constructor(private servisLet:LetServisi) {
    this.allFlights = servisLet.loadFlights();
   }

  ngOnInit(): void {
  }
  Search(){
    this.allFlights = this.allFlights.filter(res=>{
      return res.lokacijaPresedanja.toLocaleLowerCase().match(this.searchFlight.toLocaleLowerCase());
        });
    if(this.searchFlight ==""){
      this.allFlights = this.servisLet.loadFlights();
    }
  }
}
