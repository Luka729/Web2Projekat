import { Injectable } from '@angular/core';
import {LetEntiteti} from 'src/app/entiteti/let-entiteti';

@Injectable({
    providedIn: 'root'
  })
export class LetServisi {
    constructor() {}
    mockedFlights(): Array<LetEntiteti> {
        let allFlights = new Array<LetEntiteti>();
        

        const l1 = new LetEntiteti(new Date("2019-01-16").toLocaleDateString(),new Date("2019-01-17").toLocaleDateString(),new Date('2019-01-17T21:20:20').getHours(),new Date('2019-01-17T21:20:20').getMinutes(),17000,2,'Zrenjanin i Bečej',16000,100);
        const l2 = new LetEntiteti(new Date("2019-12-11").toLocaleDateString(),new Date("2019-12-11").toLocaleDateString(),new Date('2019-12-11T06:20:00').getHours(),new Date('2019-12-11T06:20:00').getMinutes(),500,0,'',300, 150);
        const l3 = new LetEntiteti(new Date("2019-12-23").toLocaleDateString(),new Date("2019-12-23").toLocaleDateString(),new Date('2019-12-23T04:23:00').getHours(),new Date('2019-12-23T04:23:00').getMinutes(),499,1,'Minhen',299,4);

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
