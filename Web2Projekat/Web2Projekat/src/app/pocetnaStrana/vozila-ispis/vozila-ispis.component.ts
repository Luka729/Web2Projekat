import { Component, OnInit } from '@angular/core';
import { AutomobiliEntiteti } from 'src/app/entiteti/automobili-entiteti';
import { AutomobiliServisi } from 'src/app/servisi/automobili-servisi';

@Component({
  selector: 'app-vozila-ispis',
  templateUrl: './vozila-ispis.component.html',
  styleUrls: ['./vozila-ispis.component.css']
})
export class VozilaIspisComponent implements OnInit {
  allCars: Array<AutomobiliEntiteti>;
  searchServicRaC:string;
  constructor(private automobili: AutomobiliServisi) 
  {
    this.allCars = this.automobili.loadCars();
   }

  ngOnInit(): void {
  }
  Search(){
    this.allCars = this.allCars.filter(res=>{
      return res.brand.toLocaleLowerCase().match(this.searchServicRaC.toLocaleLowerCase());
    });

    if(this.searchServicRaC ==""){
      this.allCars = this.automobili.loadCars();
    }
  }

}
