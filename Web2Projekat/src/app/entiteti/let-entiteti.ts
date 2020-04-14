export class LetEntiteti {
    datumPoletanja: Date;
    datumSletanja: Date;
    vremePutovanja: number;
    duzinaPutovanja: number;
    brojPresedanja: number;
    lokacijaPresedanja: string;
    cenaKarte: number;

    constructor(datumPoletanja: Date,datumSletanja: Date,vremePutovanja: number,duzinaPutovanja: number,brojPresedanja: number,lokacijaPresedanja: string,cenaKarte:number){
        this.datumPoletanja = datumPoletanja;
        this.datumSletanja = datumSletanja;
        this.vremePutovanja = vremePutovanja;
        this.duzinaPutovanja = duzinaPutovanja;
        this.brojPresedanja = brojPresedanja;
        this.lokacijaPresedanja = lokacijaPresedanja;
        this.cenaKarte = cenaKarte;
    }
}
