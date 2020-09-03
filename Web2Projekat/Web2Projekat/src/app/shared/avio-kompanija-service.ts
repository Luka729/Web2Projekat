import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AvioKompanijaService {
    rola: any;

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }
    readonly BaseURI = 'http://localhost:58544/api';




    
    ListaAvioKompanija(){
        return this.http.get(this.BaseURI + '/Avio/DobaviListuAvioKompanija');

    }

}