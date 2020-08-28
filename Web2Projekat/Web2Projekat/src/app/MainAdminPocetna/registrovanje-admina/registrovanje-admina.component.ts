import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registrovanje-admina',
  templateUrl: './registrovanje-admina.component.html',
  styleUrls: ['./registrovanje-admina.component.css']
})

@Injectable()

export class RegistrovanjeAdminaComponent implements OnInit {
  toastr: any;
  load: number;
  rola: any;

  constructor(public service: UserService,private fb: FormBuilder,private http:HttpClient,private route:Router) {
    this.load = 0
    this.rola = ""
   }

  registrovanjeForm= new FormGroup({
    izborAdmina: new FormControl()
 }); 

  ngOnInit() {
    this.service.registrovanjeAdminForm.reset();
  }
  
  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.service.registerAdmin().subscribe(
      (res: any) => {      
        console.log("RADI");
        this.service.registrovanjeAdminForm.reset();
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

