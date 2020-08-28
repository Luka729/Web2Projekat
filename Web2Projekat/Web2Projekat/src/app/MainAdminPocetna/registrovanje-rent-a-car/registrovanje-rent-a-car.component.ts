import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrovanje-rent-a-car',
  templateUrl: './registrovanje-rent-a-car.component.html',
  styleUrls: ['./registrovanje-rent-a-car.component.css']
})
export class RegistrovanjeRentACarComponent implements OnInit {
  lista:Array<string>;
  load: number;

  constructor(private fb: FormBuilder,private http:HttpClient,private route:Router) {
    this.load = 0;
    for (let i = 0; i < this.dobaviAdmine.length; i++) {
      this.lista.push(this.dobaviAdmine[i]);
    }
   }

   registrovanjeRentACar = new FormGroup({}); 
   readonly BaseURI ='http://localhost:58544/api';

   ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.registrovanjeRentACar = this.fb.group({
    'nazivProvera' :['',Validators.required],
    'adresaProvera' : ['',Validators.required],
    'promotivniOpisProvera': ['',Validators.required],
    'adminProvera': ['',Validators.required]
  })
  }

  register() {  
    var body = {
    Naziv: this.registrovanjeRentACar.value.nazivProvera,
    Adresa: this.registrovanjeRentACar.value.adresaProvera,
    GrpromotivniOpis: this.registrovanjeRentACar.value.promotivniOpisProvera,
    Admin: this.registrovanjeRentACar.value.adminProvera,
    };
    return this.http.post(this.BaseURI + '/RegistrovaniKorisnici/Registrovanje', body);//promeni i uradi bek kasnije
}

dobaviAdmine()
{
  return this.http.get(this.BaseURI+"/RegistrovaniKorisnici/Admini");
}

  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.register().subscribe(
      (res: any) => {      
        console.log("RADI");
        this.registrovanjeRentACar.reset();
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
