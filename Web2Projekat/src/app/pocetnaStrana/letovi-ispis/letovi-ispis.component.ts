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
  constructor(private servisLet:LetServisi) {
    this.allFlights = servisLet.loadFlights();
   }

  ngOnInit(): void {
  }

}
