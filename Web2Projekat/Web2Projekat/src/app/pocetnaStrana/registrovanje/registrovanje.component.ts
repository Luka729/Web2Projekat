import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

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
  //toastr: any;
  load: number;
  rola: any;


  constructor(public service: UserService, private toastr: ToastrService) {
    this.load = 0
    this.rola = ""
  }

  ngOnInit() {
    this.service.registrovanjeForm.reset();
  }

  onSubmit() {
    //this.load = 1
    console.log("Uslo u submit");
    this.service.register().subscribe(
      (res: any) => {
        console.log("RADI");
        this.service.registrovanjeForm.reset();
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