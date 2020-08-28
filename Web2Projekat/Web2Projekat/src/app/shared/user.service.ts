import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    rola: any;

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.rola = ""
    }
    readonly BaseURI = 'http://localhost:58544/api';

    registrovanjeForm = this.fb.group({
        'imeProvera': ['', Validators.required],
        'prezimeProvera': ['', Validators.required],
        'gradProvera': ['', Validators.required],
        'telefonProvera': ['', [Validators.required, Validators.maxLength(10), Validators.pattern("([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})")]],
        'lozinkaProvera': ['', [Validators.required, Validators.minLength(6)]],
        'proveralozinkeProvera': ['', Validators.required],
        'userNameProvera': ['', [Validators.required, Validators.minLength(6)]],
        'eadresaProvera': ['', [Validators.required, Validators.email]]
    }, { validator: this.comparePasswords })

    registrovanjeAdminForm = this.fb.group({
        'imeProvera' :['',Validators.required],
        'prezimeProvera' : ['',Validators.required],
        'gradProvera': ['',Validators.required],
        'telefonProvera': ['',[Validators.required,Validators.maxLength(10),Validators.pattern("([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})")]],
        'lozinkaProvera': ['',[Validators.required, Validators.minLength(6)]],
        'proveralozinkeProvera' : ['',Validators.required],
        'userNameProvera': ['', [Validators.required,Validators.minLength(6)]],
        'eadresaProvera' : ['',[Validators.required,Validators.email]],
        'izborAdmina':['',new FormControl()]
      },{ validator: this.comparePasswords})

    comparePasswords(fb: FormGroup) {
        let confirmPswrdCtrl = fb.get('proveralozinkeProvera');
        //passwordMismatch
        //confirmPswrdCtrl.errors={passwordMismatch:true}
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('lozinkaProvera').value != confirmPswrdCtrl.value)
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            else
                confirmPswrdCtrl.setErrors(null);
        }
    }

    register() {
        if (this.registrovanjeForm.value.userNameProvera.indexOf("AvioAdmin") !== -1) {
            this.rola = "avio_admin";
        }

        else if (this.registrovanjeForm.value.userNameProvera.indexOf("CarAdmin") !== -1) {
            this.rola = "car_admin";

        }
        else if (this.registrovanjeForm.value.userNameProvera.indexOf("MainAdmin") !== -1) {
            this.rola = "main_admin";

        }
        else {
            this.rola = "regular_user";

        }
        var body = {
            Ime: this.registrovanjeForm.value.imeProvera,
            Prezime: this.registrovanjeForm.value.prezimeProvera,
            Grad: this.registrovanjeForm.value.gradProvera,
            Telefon: this.registrovanjeForm.value.telefonProvera,
            Email: this.registrovanjeForm.value.eadresaProvera,
            Lozinka: this.registrovanjeForm.value.lozinkaProvera,
            UserName: this.registrovanjeForm.value.userNameProvera,
            Rola: this.rola,
        };
        return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/Registrovanje', body);

    }

    izmena()
    {
        if (this.registrovanjeForm.value.userNameProvera.indexOf("AvioAdmin") !== -1) {
            this.rola = "avio_admin";
        }

        else if (this.registrovanjeForm.value.userNameProvera.indexOf("CarAdmin") !== -1) {
            this.rola = "car_admin";

        }
        else if (this.registrovanjeForm.value.userNameProvera.indexOf("MainAdmin") !== -1) {
            this.rola = "main_admin";

        }
        else {
            this.rola = "regular_user";

        }
        var body = {
            Ime: this.registrovanjeForm.value.imeProvera,
            Prezime: this.registrovanjeForm.value.prezimeProvera,
            Grad: this.registrovanjeForm.value.gradProvera,
            Telefon: this.registrovanjeForm.value.telefonProvera,
            Email: this.registrovanjeForm.value.eadresaProvera,
            Lozinka: this.registrovanjeForm.value.lozinkaProvera,
            UserName: this.registrovanjeForm.value.userNameProvera,
            Rola: this.rola,
        };
        return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/IzmenaPodataka', body);
    }

    registerAdmin() {

        if(this.registrovanjeAdminForm.value.izborAdmina === "Avio Admin")
        {
          if(this.registrovanjeAdminForm.value.userNameProvera.indexOf("AvioAdmin")  === -1)
          {
            this.registrovanjeAdminForm.value.userNameProvera += "AvioAdmin";
          }
          this.rola = "avio_admin";
        }
        
        else if(this.registrovanjeAdminForm.value.izborAdmina === "Car Admin")
        {
          if(this.registrovanjeAdminForm.value.userNameProvera.indexOf("Car Admin")  === -1)
          {
            this.registrovanjeAdminForm.value.userNameProvera += "CarAdmin";
          }
          this.rola = "car_admin";
        }
        else{
          console.log("Greska nema role");
    
        }
        var body = {
        Ime: this.registrovanjeAdminForm.value.imeProvera,
        Prezime: this.registrovanjeAdminForm.value.prezimeProvera,
        Grad: this.registrovanjeAdminForm.value.gradProvera,
        Telefon: this.registrovanjeAdminForm.value.telefonProvera,
        Email: this.registrovanjeAdminForm.value.eadresaProvera,
        Lozinka: this.registrovanjeAdminForm.value.lozinkaProvera,
        UserName: this.registrovanjeAdminForm.value.userNameProvera,
        Rola: this.rola,
        };
        return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/Registrovanje', body);
    }


    externalLogin(loginForm) {
        return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/DrustveneMrezeLogin', loginForm);
    }

    login(formData) {
        return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/Logovanje', formData);
    }

}