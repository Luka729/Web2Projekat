import { Injectable } from '@angular/core';
import { AvioEntiteti } from '../entiteti/avio-entiteti';
import { LetServisi } from './let-servisi';
import { LetEntiteti } from '../entiteti/let-entiteti';

@Injectable({
    providedIn: 'root'
  })

export class AvioServisi {
    constructor() {}

    mockedAvioCompany(): Array<AvioEntiteti> {
        let allavioEntitet = new Array<AvioEntiteti>();     //NASA AVIO KOMPANIJA
        let allavioListt: LetServisi;       //mokovani letovi SERVIS
        let allFlights: Array<LetEntiteti>; //lista letova ENTITET

        
        const av1 = new AvioEntiteti('JAT','Dusanova 15','Old but gold',["Srbija","SAD"],allFlights,5);
        const av2 = new AvioEntiteti('AirSerbia', 'Nemanjina 16', 'Pouzdanost drugo ime',["Budimpesta","Istambul"] , allFlights,4);
        const av3 = new AvioEntiteti('Kripto Flight', 'Jovina 235', 'Sa nama u pravo vreme', ["Milano","Bečej"], allFlights,3);
        
        allavioEntitet.push(av1);
        allavioEntitet.push(av2);
        allavioEntitet.push(av3);
        
    
        return allavioEntitet;
      }
      loadFlightCompany() {
        console.log('Učitavanje rent-a-car servisa...');
        return this.mockedAvioCompany();
      }
}


