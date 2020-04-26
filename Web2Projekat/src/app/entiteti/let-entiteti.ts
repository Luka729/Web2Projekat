export class LetEntiteti {
    datumPoletanja: string;
    datumSletanja: string;
    satPutovanja: number;
    minutPutovanja: number
    duzinaPutovanja: number;
    brojPresedanja: number;
    lokacijaPresedanja: string;
    cenaKarte: number;
    slobodnaMesta: number;

    constructor(datumPoletanja: string,datumSletanja: string,satPutovanja: number,minutPutovanja: number,duzinaPutovanja: number,brojPresedanja: number,lokacijaPresedanja: string,cenaKarte:number, slobodnaMesta:number){
        this.datumPoletanja = datumPoletanja;
        this.datumSletanja = datumSletanja;
        this.satPutovanja = satPutovanja;
        this.minutPutovanja = minutPutovanja;
        this.duzinaPutovanja = duzinaPutovanja;
        this.brojPresedanja = brojPresedanja;
        this.lokacijaPresedanja = lokacijaPresedanja;
        this.cenaKarte = cenaKarte;
        this.slobodnaMesta = slobodnaMesta;
    }
}
