import {AutomobiliEntiteti} from 'src/app/entiteti/automobili-entiteti'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class AutomobiliServisi {
    constructor() {}
    mockedCars(): Array<AutomobiliEntiteti> {
        let allCars = new Array<AutomobiliEntiteti>();
    
        const c1 = new AutomobiliEntiteti(1, 'Audi', 'RS5', 2020, 245);
        const c2 = new AutomobiliEntiteti(2, 'BMW', 'M5', 2017, 175);
        const c3 = new AutomobiliEntiteti(3, 'Yugo', 'Koral 45', 1991, 25);
        const c4 = new AutomobiliEntiteti(4, 'Mercedec', 'AMG GT63', 2019, 437);
        const c5 = new AutomobiliEntiteti(5, 'Toyota', 'Yaris', 2010, 86);
    
        allCars.push(c1);
        allCars.push(c2);
        allCars.push(c3);
        allCars.push(c4);
        allCars.push(c5);
    
        return allCars;
      }
      loadCars() {
        console.log('Učitavanje vozila...');
        return this.mockedCars();
      }
}
