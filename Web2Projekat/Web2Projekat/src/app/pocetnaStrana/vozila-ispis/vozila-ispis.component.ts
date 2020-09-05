import { Component, OnInit } from '@angular/core';
import { AutomobiliEntiteti } from 'src/app/entiteti/automobili-entiteti';
import { AutomobiliServisi } from 'src/app/servisi/automobili-servisi';
import { RentACarService } from 'src/app/shared/RentACar.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route:ActivatedRoute,public service:RentACarService) 
  {
    route.params.subscribe(params => {
      this.servisi = params['servisi'];
      console.log("UNUTAR KONSTRUKTORA:"+params['servisi']);
      this.ispisKola(this.servisi);
    });
   }

  ngOnInit(): void {
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
