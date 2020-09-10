import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/shared/RentACar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dodaj-filijalu',
  templateUrl: './dodaj-filijalu.component.html',
  styleUrls: ['./dodaj-filijalu.component.css']
})
export class DodajFilijaluComponent implements OnInit {

  username:string;
  constructor(public service: RentACarService, private route:ActivatedRoute, private router:Router) { 
    route.params.subscribe(params => {
      this.username = params['userNameProvera'];
      console.log("UNUTAR KONSTRUKTORA:"+params['userNameProvera']);
    });
    console.log("USERNAME:"+this.username);
  }

  ngOnInit(): void {
  }
  filijalaForm = new FormGroup({});

  onSubmit() {
    console.log("Uslo u submit");
    this.service.dodajFilijalu(this.username).subscribe(
      (res: any) => {      
        console.log("RADI");
        this.service.filijalaForm.reset();
        console.log(res);  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }

}
