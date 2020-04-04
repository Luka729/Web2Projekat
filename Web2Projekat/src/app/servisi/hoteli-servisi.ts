import {HoteliEntiteti} from 'src/app/entiteti/hoteli-entiteti'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class HoteliServisi {
    constructor() {}
    mockedHotels(): Array<HoteliEntiteti> {
        let allHotels = new Array<HoteliEntiteti>();
    
        const h1 = new HoteliEntiteti(1, 'Emirates Palace', 'Abu Dhabi, United Arab Emirates', 4.3, 660, 26000);
        const h2 = new HoteliEntiteti(2, 'Mardan Palace', 'Antalya, Turkey', 2.9, 230, 12360);
        const h3 = new HoteliEntiteti(3, 'Burj Al Arab', 'Dubai, United Arab Emirates', 4.9, 1399, 32000);
        const h4 = new HoteliEntiteti(4, 'Atlantis Paradise', 'Paradise Island, Bahamas', 3.6, 899, 16800);

    
        allHotels.push(h1);
        allHotels.push(h2);
        allHotels.push(h3);
        allHotels.push(h4);
        
    
        return allHotels;
      }
      loadHotels() {
        console.log('Učitavanje hotela...');
        return this.mockedHotels();
      }
}
