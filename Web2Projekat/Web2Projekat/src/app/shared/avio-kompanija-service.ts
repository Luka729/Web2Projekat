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

    ListaAvioKompanija() {
        return this.http.get(this.BaseURI + '/Avio/DobaviListuAvioKompanija');

    }

    LetForm = this.fb.group({
        'mestoPoletanjaProvera': ['', Validators.required],
        'mestoSletanjaProvera': ['', Validators.required],
        'datumPoletanjaProvera': ['', Validators.required],
        'datumSletanjaProvera': ['', Validators.required],
        'satPolaskaProvera': ['', Validators.required],
        'minutPolaskaProvera': ['', Validators.required],
        'duzinaPutovanjaProvera': ['', Validators.required],
        'brojPresedanjaProvera': ['', Validators.required],
        'lokacijaPresedanjaProvera': ['', Validators.required],
        'cenaKarteProvera': ['', Validators.required],
        'brojSlobodnihMestaProvera': ['', Validators.required]
    })
    ucitajLet(nazivKompanije: string){
        return this.http.get(this.BaseURI + '/Avio/DobaviListuLetova/'+nazivKompanije);

    }
    dodajLet(username: string) {

        var body = {
            LokacijaSletanja: this.LetForm.value.mestoSletanjaProvera,
            LokacijaPoletanja: this.LetForm.value.mestoPoletanjaProvera,
            DatumPoletanja: this.LetForm.value.datumPoletanjaProvera,
            DatumSletanja: this.LetForm.value.datumSletanjaProvera,
            SatPutovanja: this.LetForm.value.satPolaskaProvera,
            MinutPutovanja: this.LetForm.value.minutPolaskaProvera,
            DuzinaPutovanja: this.LetForm.value.duzinaPutovanjaProvera,
            BrojPresedanja: this.LetForm.value.brojPresedanjaProvera,
            LokacijaPresedanja: this.LetForm.value.lokacijaPresedanjaProvera,
            CenaKarte: this.LetForm.value.cenaKarteProvera,
            SlobodnaMesta: this.LetForm.value.brojSlobodnihMestaProvera,
        };
        return this.http.post(this.BaseURI + '/Avio/DodajLet/' + username, body);

    }
}