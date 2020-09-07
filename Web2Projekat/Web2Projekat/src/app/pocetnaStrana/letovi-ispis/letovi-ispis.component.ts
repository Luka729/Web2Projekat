import { Component, OnInit } from '@angular/core';
import { LetEntiteti } from 'src/app/entiteti/let-entiteti';
import { LetServisi } from 'src/app/servisi/let-servisi';
import { ActivatedRoute } from '@angular/router';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';
import { tipovi} from 'src/app/entiteti/enumeracija';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-letovi-ispis',
  templateUrl: './letovi-ispis.component.html',
  styleUrls: ['./letovi-ispis.component.css']
})
export class LetoviIspisComponent implements OnInit {
  listaLetova: Array<any>
  searchFlight: string;
  searchFlight2: string;
  letovi:any;
  user:any = tipovi.neregular;
  listaPomocnaLetova: Array<any>
 
  constructor(private route:ActivatedRoute,public service:AvioKompanijaService) {
    route.params.subscribe(params => {
      this.letovi = params['letovi'];
      console.log("UNUTAR KONSTRUKTORA:"+params['letovi']);
      this.ispisLetova(this.letovi);
    });
   }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    var decodeToken = helper.decodeToken(token);
    if(token != null)
    {
      console.log(decodeToken.role);
      if(decodeToken.role === "main_admin"){this.user = tipovi.main;}
      else if(decodeToken.role === "avio_admin"){this.user = tipovi.avio;}
      else if(decodeToken.role === "car_admin"){ this.user = tipovi.rent;}
      else if(decodeToken.role === "regular_user"){ this.user = tipovi.regular;}
      else{this.user = tipovi.neregular;}
    }
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

  RezervacijaLeta(lokacijaPoletanja:string ,lokacijaSletanja:string ,datumPoletanja:string ,datumSletanja: string){
      //...
  }
  Search(){
    this.listaLetova = this.listaLetova.filter(res=>{
      return res.lokacijaPoletanja.toLocaleLowerCase().match(this.searchFlight.toLocaleLowerCase()), res.lokacijaSletanja.toLocaleLowerCase().match(this.searchFlight2.toLocaleLowerCase());
        });
    if(this.searchFlight =="" || this.searchFlight2==""){
      this.listaLetova = this.listaPomocnaLetova;
    }
  }
  
}
