import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-registrovanje',
  templateUrl: './registrovanje.component.html',
  styleUrls: ['./registrovanje.component.css']
})

@Injectable()

export class RegistrovanjeComponent implements OnInit {
  toastr: any;
  load: number;
  rola: any;
  

  constructor(private fb: FormBuilder,private http:HttpClient,private route:Router) {
    this.load = 0
    this.rola = ""
   }

  registrovanjeForm: FormGroup;
  telefonPattern: "([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})";
  formModel: FormGroup;
  readonly BaseURI ='http://localhost:58544/api';


  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.registrovanjeForm = this.fb.group({
    'imeProvera' :['',Validators.required],
    'prezimeProvera' : ['',Validators.required],
    'gradProvera': ['',Validators.required],
    'telefonProvera': ['',[Validators.required,Validators.maxLength(10),Validators.pattern("([0]{1}[6]{1}([0-9]{1}){8})|([0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){6})|([0-9]{1}[0-9]{1}[0-9]{1}([0-9]{1}){7})")]],
    'lozinkaProvera': ['',[Validators.required, Validators.minLength(6)]],
    'proveralozinkeProvera' : ['',Validators.required],
    'userNameProvera': ['', [Validators.required,Validators.minLength(6)]],
    'eadresaProvera' : ['',[Validators.required,Validators.email]]
  },{ validator: this.comparePasswords})

  }

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
    if(this.registrovanjeForm.value.userNameProvera.indexOf("AvioAdmin")  !== -1){
      this.rola = "avio_admin";
    }
    
    else if(this.registrovanjeForm.value.userNameProvera.indexOf("CarAdmin")  !== -1){
      this.rola = "car_admin";

    }
    else if(this.registrovanjeForm.value.userNameProvera.indexOf("MainAdmin")  !== -1){
      this.rola = "main_admin";

    }
    else{
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
  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.register().subscribe(
      (res: any) => {      
        console.log("RADI");
        this.registrovanjeForm.reset();
        document.getElementById("labelaSaGreskom").innerHTML = "";
        console.log(res);

  
      },
      err => {
        console.log("NE RADI");
        document.getElementById("labelaSaGreskom").innerHTML = "Neuspesno registrovanje, korisnik sa ovim email-om vec postoji";

        console.log(err);
      }
    );
  }


  


}