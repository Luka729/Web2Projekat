import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registrovanje-avio',
  templateUrl: './registrovanje-avio.component.html',
  styleUrls: ['./registrovanje-avio.component.css']
})
export class RegistrovanjeAvioComponent implements OnInit {
  lista:Array<any>;
  load: number;
  indeks: any;
  pom: number;
  constructor(private fb: FormBuilder,private http:HttpClient,private route:Router, public service: UserService) {
    this.load = 0;
    this.pom = 0;

   }

   
   registrovanjeRentACar = new FormGroup({}); 
   readonly BaseURI ='http://localhost:58544/api';

   ngOnInit(): void {
    this.initForm();
    this.ListaAvioAdmina();
  }
  private initForm() {
    
  }
ListaAvioAdmina() :void{
  this.service.ListaAvioAdmina().subscribe(
    (res: any) => {   
      this.lista=res;  
      console.log(this.lista);     
    },
    err => {
      console.log("NE RADI DOBAVLJANJE KORISNIKA");
      console.log(err);
    }
  );
}

  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.service.UpisiAvio().subscribe(
      (res: any) => {      
        console.log("RADI");
        this.service.registrovanjeRentACar.reset();
        console.log(res);  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }

}