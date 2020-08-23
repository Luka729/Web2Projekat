import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-korisnika',
  templateUrl: './profil-korisnika.component.html',
  styleUrls: ['./profil-korisnika.component.css']
})
export class ProfilKorisnikaComponent implements OnInit {
  defaultComponent=0;
  username:string;

  constructor(private route:ActivatedRoute, private router: Router) {
    this.defaultComponent = 1;
   route.params.subscribe(params => {
     this.username = params['userNameProvera'];
   });
   console.log("USERNAME:"+this.username);

   }
  izmeniPodatke(){
    this.router.navigateByUrl('/izmena-korisnika/' + this.username);

  }

  rezervisiKarte(){}
  oceniAviokompaniju(){}
  oceniLet(){}
  otkaziLet(){}
  oceniRentACar(){}
  rezervisiVozilo(){}
  oceniVozilo(){}
  otkaziVozilo(){}


  ngOnInit(): void {
  }

}
