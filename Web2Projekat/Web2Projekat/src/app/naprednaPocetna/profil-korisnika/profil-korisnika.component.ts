import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-korisnika',
  templateUrl: './profil-korisnika.component.html',
  styleUrls: ['./profil-korisnika.component.css']
})
export class ProfilKorisnikaComponent implements OnInit {

  defaultComponent=0;
  username:string;

  constructor(private route:ActivatedRoute) {
   this.defaultComponent = 1;
   route.params.subscribe(params => {
     this.username = params['UserName'];
   });
   }

  ngOnInit(): void {
  }

}
