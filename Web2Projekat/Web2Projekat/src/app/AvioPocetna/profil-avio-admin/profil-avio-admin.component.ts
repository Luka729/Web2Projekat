import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-avio-admin',
  templateUrl: './profil-avio-admin.component.html',
  styleUrls: ['./profil-avio-admin.component.css']
})
export class ProfilAvioAdminComponent implements OnInit {
  username:string;
  constructor(private route:ActivatedRoute, private router: Router){
    route.params.subscribe(params => {
      this.username = params['userNameProvera'];
      console.log("UNUTAR KONSTRUKTORA:"+params['userNameProvera']);

    });
    console.log("USERNAME:"+this.username);
   }

  ngOnInit(): void {}
  definisiDestinacije(){

  }
  dodajNovLet(){}
  definisiCenovnik(){}
  dobaviIzvestaj(){}
  urediInfoStranicu(){}
  izmeniPodatke(){
    console.log("USERNAME U FUNKCIJI:"+this.username);

    this.router.navigateByUrl('/izmena-korisnika/' + this.username);

  }
}
