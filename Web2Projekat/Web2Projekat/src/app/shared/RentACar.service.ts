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

}


