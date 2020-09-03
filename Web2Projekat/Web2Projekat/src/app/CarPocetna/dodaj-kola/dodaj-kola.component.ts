import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { RentACarService } from 'src/app/shared/RentACar.service';

@Component({
  selector: 'app-dodaj-kola',
  templateUrl: './dodaj-kola.component.html',
  styleUrls: ['./dodaj-kola.component.css']
})
export class DodajKolaComponent implements OnInit {
  lista:Array<any>;
  load: number;
  username: string;

  constructor( private route:ActivatedRoute, private fb: FormBuilder,private http:HttpClient,private router:Router, public service: RentACarService) {
    this.load = 0;
    route.params.subscribe(params => {
      this.username = params['userNameProvera'];
      console.log("UNUTAR KONSTRUKTORA:"+params['userNameProvera']);
    });
    console.log("USERNAME:"+this.username);
   }

   KolaForm = new FormGroup({}); 

   ngOnInit(): void {
    this.initForm();
  }
  private initForm() {}

  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.service.dodajKola(this.username).subscribe(
      (res: any) => {      
        console.log("RADI");
        this.KolaForm.reset();
        console.log(res);  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }

}
