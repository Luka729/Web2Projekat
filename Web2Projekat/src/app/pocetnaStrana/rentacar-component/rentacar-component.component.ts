import { Component, OnInit } from '@angular/core';
import { RentacarEntitet } from 'src/app/entiteti/rentacar-entitet';
import { RentacarServisi } from 'src/app/servisi/rentacar-servisi';
import { AutomobiliEntiteti } from 'src/app/entiteti/automobili-entiteti';
import { AutomobiliServisi } from 'src/app/servisi/automobili-servisi';

@Component({
  selector: 'app-rentacar-component',
  templateUrl: './rentacar-component.component.html',
  styleUrls: ['./rentacar-component.component.css']
})
export class RentacarComponentComponent implements OnInit {
  
  allRentACars: Array<RentacarEntitet>;
  allCars: Array<AutomobiliEntiteti>;
  constructor(private servis: RentacarServisi, private servisAuto: AutomobiliServisi) { 
    
    this.allRentACars = this.servis.loadRentaCars();
    this.allCars = this.servisAuto.loadCars();
  }

  ngOnInit(): void {
  }

}
