import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AvioKompanijaService {

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }
    readonly BaseURI = 'http://localhost:58544/api';

    
    izmenaAKForm = this.fb.group({
        'nazivProvera' :['',Validators.required],
        'adresaProvera' : ['',Validators.required],
        'promotivniOpisProvera': ['',Validators.required],
    })
    LetForm = this.fb.group({
        'mestoPoletanjaProvera': ['', Validators.required],
        'mestoSletanjaProvera': ['', Validators.required],
        'datumPoletanjaProvera': ['', Validators.required],
        'datumSletanjaProvera': ['', Validators.required],
        'duzinaPutovanjaProvera': ['', Validators.required],
        'brojPresedanjaProvera': ['', Validators.required],
        'lokacijaPresedanjaProvera': ['', Validators.required],
        'cenaKarteProvera': ['', Validators.required],
        'brojSlobodnihMestaProvera': ['', Validators.required]
    })

    pretragaLetaForm = this.fb.group({
        'polazniAerodromProvera': ['', Validators.required],
        'odredisniAerodromProvera': ['', Validators.required],
        'datumPolaskaProvera': ['', Validators.required],
        'datumPovratkaProvera': ['', Validators.required],
    })

    //pretragaLetaForm = this.fb.group({})

    ListaAvioKompanija() {
        return this.http.get(this.BaseURI + '/Avio/DobaviListuAvioKompanija');

    }
    ucitajLet(nazivKompanije: string){
        return this.http.get(this.BaseURI + '/Avio/DobaviListuLetova/'+nazivKompanije);

    }
    NalogAvioKompanije(username: string){
        return this.http.get(this.BaseURI + '/Avio/DobaviPodatkeAvioKompanije/'+username);

    }
    
    izmenaAvioKompanije(username: string){
        var body = {
            Naziv: this.izmenaAKForm.value.nazivProvera,
            Adresa: this.izmenaAKForm.value.adresaProvera,
            PromotivniOpis: this.izmenaAKForm.value.promotivniOpisProvera,
            Admin: username,
        };
        return this.http.post(this.BaseURI + '/Avio/IzmenaPodataka', body);

    }

    dodajLet(username: string) {

        var body = {
            LokacijaSletanja: this.LetForm.value.mestoSletanjaProvera,
            LokacijaPoletanja: this.LetForm.value.mestoPoletanjaProvera,
            DatumPoletanja: this.LetForm.value.datumPoletanjaProvera,
            DatumSletanja: this.LetForm.value.datumSletanjaProvera,
            DuzinaPutovanja: this.LetForm.value.duzinaPutovanjaProvera,
            BrojPresedanja: this.LetForm.value.brojPresedanjaProvera,
            LokacijaPresedanja: this.LetForm.value.lokacijaPresedanjaProvera,
            CenaKarte: this.LetForm.value.cenaKarteProvera,
            SlobodnaMesta: this.LetForm.value.brojSlobodnihMestaProvera,
        };
        return this.http.post(this.BaseURI + '/Avio/DodajLet/' + username, body);

    }

    dobaviSveLetove(){
        var PolazniAerodrom=this.pretragaLetaForm.value.polazniAerodromProvera;
        var OdredisniAerodrom =this.pretragaLetaForm.value.odredisniAerodromProvera;
        var DatumPolaska =this.pretragaLetaForm.value.datumPolaskaProvera;
        var DatumPovratka = this.pretragaLetaForm.value.datumPovratkaProvera;

        return this.http.get(this.BaseURI + '/Avio/DobaviListuLetova/'+PolazniAerodrom+'/'+OdredisniAerodrom+'/'+DatumPolaska+'/'+DatumPovratka);
    }

    dobaviLet(id:string){
        return this.http.get(this.BaseURI + '/Avio/DobaviLet/'+id);
    }

    dobaviSedista(id:string){
        return this.http.get(this.BaseURI + '/Avio/DobaviSedista/'+id);
    }
    
    rezervisi(letId: string, ticketIDs: string, userId:string){
        return this.http.get(this.BaseURI + '/Avio/Rezervisi/' + letId + '/' + ticketIDs + '/' + userId); 
    }
}