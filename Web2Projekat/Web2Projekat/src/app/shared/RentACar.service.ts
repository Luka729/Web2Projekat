import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RentACarService {
    rola: any;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.rola = ""
    }
    readonly BaseURI = 'http://localhost:58544/api';

    KolaForm = this.fb.group({
        'brendProvera': ['', Validators.required],
        'modelProvera': ['', Validators.required],
        'godinaProvera': ['', Validators.required],
        'cenaProvera': ['', Validators.required]
    })
    izmenaRACForm = this.fb.group({
        'nazivProvera' :['',Validators.required],
        'adresaProvera' : ['',Validators.required],
        'promotivniOpisProvera': ['',Validators.required],
    })

    RezervacijaForm = this.fb.group({
        'datumPocetkaRezervacije' : ['',Validators.required],
        'datumKrajaRezervacije': ['',Validators.required],

    })

    dodajKola(username: string) {

        var body = {
            Brend: this.KolaForm.value.brendProvera,
            Model: this.KolaForm.value.modelProvera,
            Godina: this.KolaForm.value.godinaProvera,
            CenaPoDanu: this.KolaForm.value.cenaProvera,
        };
        return this.http.post(this.BaseURI + '/RentACar/DodajKola/' + username, body);
    }

    ListaRentACar(){
        return this.http.get(this.BaseURI + '/RentACar/DobaviListuRentACarServisa');

    }

    ucitajKola(nazivKompanije: string){
        return this.http.get(this.BaseURI + '/RentACar/DobaviListuKola/'+nazivKompanije);

    }
    ucitajAuto(id:string){
        return this.http.get(this.BaseURI + '/RentACar/DobaviAutoSaID/'+id);

    }
    NalogRAC(username: string){
        return this.http.get(this.BaseURI + '/RentACar/DobaviPodatkeRAC/'+username);

    }

    izmenaRAC(username: string){
        var body = {
            Naziv: this.izmenaRACForm.value.nazivProvera,
            Adresa: this.izmenaRACForm.value.adresaProvera,
            PromotivniOpis: this.izmenaRACForm.value.promotivniOpisProvera,
            Admin: username,
        };
        return this.http.post(this.BaseURI + '/RentACar/IzmenaPodataka', body);

    }

    rezervisiAuto(id:string,userID:string){
        var body = {         
            IdKorisnika:userID,
            IdKola: id,
            PocetakRezervacije: this.RezervacijaForm.value.datumPocetkaRezervacije,
            KrajRezervacije: this.RezervacijaForm.value.datumKrajaRezervacije,
        }
        return this.http.post(this.BaseURI + '/RentACar/RezervisiAuto', body);

    }



}


