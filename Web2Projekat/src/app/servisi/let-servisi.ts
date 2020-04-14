import { Injectable } from '@angular/core';
import {LetEntiteti} from 'src/app/entiteti/let-entiteti';

@Injectable({
    providedIn: 'root'
  })
export class LetServisi {
    constructor() {}
    mockedFlights(): Array<LetEntiteti> {
        let allFlights = new Array<LetEntiteti>();
        

        const l1 = new LetEntiteti(new Date("2019-01-16"),new Date("2019-01-17"),24,17000,2,'Zrenjanin i Bečej',16000);
        const l2 = new LetEntiteti(new Date("2019-12-11"),new Date("2019-12-11"),6,500,0,'',300);
        const l3 = new LetEntiteti(new Date("2019-12-23"),new Date("2019-12-23"),5,499,1,'Minhen',299);

        allFlights.push(l1);
        allFlights.push(l2);
        allFlights.push(l3);
        
        return allFlights;
      }
      loadFlights() {
        console.log('Učitavanje letova...');
        return this.mockedFlights();
      }
}
