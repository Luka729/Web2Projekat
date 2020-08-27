import {RentacarEntitet} from 'src/app/entiteti/rentacar-entitet';
import {AutomobiliEntiteti} from 'src/app/entiteti/automobili-entiteti';
import { Injectable } from '@angular/core';
import { AutomobiliServisi } from './automobili-servisi';

@Injectable({
    providedIn: 'root'
  })


export class RentacarServisi {

    constructor() {}

    mockedRentACar(): Array<RentacarEntitet> {
        let allRentaCars = new Array<RentacarEntitet>();
        let allCarsList: AutomobiliServisi;
        let allCars: Array<AutomobiliEntiteti>;

        
        const rac1 = new RentacarEntitet('Srecni zivot','Neznanog Junaka 23','Najbolji smo i najjeftiniji',8000,allCars,'as',4);
        const rac2 = new RentacarEntitet('Bolja kola', 'Ivice Krivice 56', 'Ma top smo, dodjite i uverite se', 2017, allCars,'sdf',3.4);
        const rac3 = new RentacarEntitet('Suncica Travica', 'JNA 52', 'Nemojte da padnete na doping testu', 1991, allCars,'dff',5);
        

        allRentaCars.push(rac1);
        allRentaCars.push(rac2);
        allRentaCars.push(rac3);
        
    
        return allRentaCars;
      }
      loadRentaCars() {
        console.log('Učitavanje rent-a-car servisa...');
        return this.mockedRentACar();
      }
}
