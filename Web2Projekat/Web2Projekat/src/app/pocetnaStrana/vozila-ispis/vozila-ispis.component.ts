import { Component, OnInit } from '@angular/core';
import { AutomobiliEntiteti } from 'src/app/entiteti/automobili-entiteti';
import { AutomobiliServisi } from 'src/app/servisi/automobili-servisi';
import { RentACarService } from 'src/app/shared/RentACar.service';
import { ActivatedRoute } from '@angular/router';
import { tipovi} from 'src/app/entiteti/enumeracija';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-vozila-ispis',
  templateUrl: './vozila-ispis.component.html',
  styleUrls: ['./vozila-ispis.component.css']
})
export class VozilaIspisComponent implements OnInit {
  lista: Array<any>;
  pomocnaLista: Array<any>;
  searchServicRaC:string;
  servisi:string;
  user:any = tipovi.neregular;
  
  constructor(private route:ActivatedRoute,public service:RentACarService) 
  {
    route.params.subscribe(params => {
      this.servisi = params['servisi'];
      console.log("UNUTAR KONSTRUKTORA:"+params['servisi']);
      this.ispisKola(this.servisi);
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
  RezervacijaKola(brend:string ,model: string,godina:string,cenaPoDanu:string){

  }
  ispisKola(servisi:any){
    this.service.ucitajKola(servisi).subscribe(
      (res: any) => {   
        this.lista = res;
        this.pomocnaLista = res;
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
    this.lista = this.lista.filter(res=>{
      return res.brand.toLocaleLowerCase().match(this.searchServicRaC.toLocaleLowerCase());
    });

    if(this.searchServicRaC ==""){
      this.lista = this.pomocnaLista;
    }
  }

}
