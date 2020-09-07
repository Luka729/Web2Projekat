import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentACarService } from 'src/app/shared/RentACar.service';

@Component({
  selector: 'app-rezervacija-kola',
  templateUrl: './rezervacija-kola.component.html',
  styleUrls: ['./rezervacija-kola.component.css']
})
export class RezervacijaKolaComponent implements OnInit {

  kolaID: any
  constructor(private route:ActivatedRoute, private router: Router, public service:RentACarService) { 
    route.params.subscribe(params => {
      this.kolaID = params['kolaObjekat'];
      console.log("REZERVACIJA KOLA:"+this.kolaID);
    });
    
    //hocu da dobavim auto sa tim ID, da ga ispisem, da omogucim korisniku da bira datum od kog do kog zeli
    //da rezervise taj auto i da taj auto dodam u listu kola koja je taj korisnik registrovo
  }

  ngOnInit(): void {
  }

}
