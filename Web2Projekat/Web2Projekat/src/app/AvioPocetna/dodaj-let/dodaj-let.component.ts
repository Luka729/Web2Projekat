import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';

@Component({
  selector: 'app-dodaj-let',
  templateUrl: './dodaj-let.component.html',
  styleUrls: ['./dodaj-let.component.css']
})
export class DodajLetComponent implements OnInit {
  lista:Array<any>;
  load: number;
  username: string;

  constructor( private route:ActivatedRoute, private fb: FormBuilder,private http:HttpClient,private router:Router, public service: AvioKompanijaService) {
    this.load = 0;
    route.params.subscribe(params => {
      this.username = params['userNameProvera'];
      console.log("UNUTAR KONSTRUKTORA:"+params['userNameProvera']);
    });
    console.log("USERNAME:"+this.username);
   }

   LetForm = new FormGroup({}); 

   ngOnInit(): void {
    this.initForm();
  }
  private initForm() {}

  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.service.dodajLet(this.username).subscribe(
      (res: any) => {      
        console.log("RADI");
       // this.service.LetForm.reset();
        console.log(res);  
      },
      err => {
        console.log("NE RADI");
        console.log(err);
      }
    );
  }

}

