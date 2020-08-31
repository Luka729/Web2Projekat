import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registrovanje-rent-a-car',
  templateUrl: './registrovanje-rent-a-car.component.html',
  styleUrls: ['./registrovanje-rent-a-car.component.css']
})
export class RegistrovanjeRentACarComponent implements OnInit {
  lista:Array<any>;
  load: number;

  constructor(private fb: FormBuilder,private http:HttpClient,private route:Router, public service: UserService) {
    this.load = 0;
    //for (let i = 0; i < this.dobaviAdmine.length; i++) {
    //  this.lista.push(this.dobaviAdmine[i]);
    //}
   }

   registrovanjeRentACar = new FormGroup({}); 
   readonly BaseURI ='http://localhost:58544/api';

   ngOnInit(): void {
    this.initForm();
    this.ListaCarAdmina();
  }
  private initForm() {
    
  }



/*dobaviAdmine()
{
  return this.http.get(this.BaseURI+"/RegistrovaniKorisnici/Admini");
}*/

ListaCarAdmina() :void{
  this.service.ListaCarAdmina().subscribe(
    (res: any) => {   
      this.lista=res;  
      console.log(this.lista);
     
    },
    err => {
      console.log("NE RADI DOBAVLJANJE KORISNIKA");
      document.getElementById("labelaSaGreskom").innerHTML = "Neuspelo dobavljanje korisnika";

      console.log(err);
    }
  );
}

  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.service.UpisiRentACar().subscribe(
      (res: any) => {      
        console.log("RADI");
        this.registrovanjeRentACar.reset();
        console.log(res);  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }

}
