import { Component, OnInit } from '@angular/core';
import { LetEntiteti } from 'src/app/entiteti/let-entiteti';
import { LetServisi } from 'src/app/servisi/let-servisi';
import { ActivatedRoute } from '@angular/router';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';

@Component({
  selector: 'app-letovi-ispis',
  templateUrl: './letovi-ispis.component.html',
  styleUrls: ['./letovi-ispis.component.css']
})
export class LetoviIspisComponent implements OnInit {
  listaLetova: Array<any>
  searchFlight: string;
  letovi:any;
  listaPomocnaLetova: Array<any>
  constructor(private route:ActivatedRoute,public service:AvioKompanijaService) {
    route.params.subscribe(params => {
      this.letovi = params['letovi'];
      console.log("UNUTAR KONSTRUKTORA:"+params['letovi']);
      this.ispisLetova(this.letovi);
    });
   }

  ngOnInit(): void {
  }

  ispisLetova(letovi:any){
    this.service.ucitajLet(letovi).subscribe(
      (res: any) => {   
        this.listaLetova = res;
        this.listaPomocnaLetova = res;
        console.log(res);
        console.log("LETOVI UCITANI");
      },
      err => {
        console.log(err);
        console.log("LETOVI NISU UCITANI");

      }
    );
  }
  Search(){
    this.listaLetova = this.listaLetova.filter(res=>{
      return res.lokacijaPoletanja.toLocaleLowerCase().match(this.searchFlight.toLocaleLowerCase());
        });
    if(this.searchFlight ==""){
      this.listaLetova = this.listaPomocnaLetova;
    }
  }
}
