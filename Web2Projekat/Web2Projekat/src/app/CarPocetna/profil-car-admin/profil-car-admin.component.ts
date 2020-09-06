import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-car-admin',
  templateUrl: './profil-car-admin.component.html',
  styleUrls: ['./profil-car-admin.component.css']
})
export class ProfilCarAdminComponent implements OnInit {

  username:string;
  nazivServisa: string;
  constructor(private route:ActivatedRoute, private router: Router){
    route.params.subscribe(params => {
      this.username = params['userNameProvera'];
      console.log("UNUTAR KONSTRUKTORA:"+params['userNameProvera']);

    });
    console.log("USERNAME:"+this.username);
   }

  ngOnInit(): void {
  }
  dodajKola(){
    this.router.navigateByUrl('/dodaj-kola/'+this.username)
  }
  dodajCenovnik(){}
  dobaviIzvestaj(){}
  urediInfoStranice(){}
  izmeniPodatke(){
    console.log("USERNAME U FUNKCIJI:"+this.username);

    this.router.navigateByUrl('/izmena-korisnika/' + this.username);

  }
  izmeniPodatkeORAC(){
    this.router.navigateByUrl('/izmena-podataka-orac/' + this.username);

  }
}
