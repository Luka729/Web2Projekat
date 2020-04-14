import { AutomobiliEntiteti } from './automobili-entiteti';

export class RentacarEntitet {
    nazivServisa: string;
    adresaServisa: string; 
    promoOpis: string;
    cenovnikUsluga: number;
    spisakVozila: Array<AutomobiliEntiteti>;
    filijale: string;
    ocena: number
    constructor(nazivServisa:string, adresaServisa:string, promoOpis: string, cenovnikUsluga:number, spisakVozila: Array<AutomobiliEntiteti>, filijale: string, ocena:number){
        this.nazivServisa = nazivServisa;
        this.adresaServisa = adresaServisa;
        this.promoOpis = promoOpis;
        this.cenovnikUsluga = cenovnikUsluga;
        this.spisakVozila = spisakVozila;
        this.filijale = filijale;
        this.ocena = ocena;
    }
}
