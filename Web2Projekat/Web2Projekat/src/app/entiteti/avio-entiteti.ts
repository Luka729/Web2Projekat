import { LetEntiteti } from './let-entiteti';

export class AvioEntiteti {
    naziv: string;
    adresa: string;
    promoOpis: string;
    destinacije: Array<string>;
    letovi: Array<LetEntiteti>;
    ocena: number;

    constructor(naziv:string, adresa: string, promoOpis:string, destinacije: Array<string>,letovi: Array<LetEntiteti>, ocena:number){
        this.naziv = naziv;
        this.adresa = adresa;
        this.promoOpis = promoOpis;
        this.destinacije = destinacije;
        this.letovi = letovi;
        this.ocena = ocena;
    }
}
