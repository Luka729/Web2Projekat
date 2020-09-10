import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentACarService } from 'src/app/shared/RentACar.service';

@Component({
  selector: 'app-profil-car-admin',
  templateUrl: './profil-car-admin.component.html',
  styleUrls: ['./profil-car-admin.component.css']
})
export class ProfilCarAdminComponent implements OnInit {

  username:string;
  nazivServisa: string;
  listaFilijala:Array<any>;
  constructor(private route:ActivatedRoute, private router: Router,public service:RentACarService){
    route.params.subscribe(params => {
      this.username = params['userNameProvera'];
      console.log("UNUTAR KONSTRUKTORA:"+params['userNameProvera']);
      this.dobaviListuFilijala(this.username);
    });
    console.log("USERNAME:"+this.username);
   }

  ngOnInit(): void {
  }

  dobaviListuFilijala(username:string){
    console.log("Uslo u submit");
    this.service.dobaviListuFilijala(this.username).subscribe(
      (res: any) => {      
        console.log("RADI");
        this.listaFilijala = res;
        console.log(res);  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }

  dodajKola(){
    this.router.navigateByUrl('/dodaj-kola/'+this.username)
  }

  dodajCenovnik(){}

  dobaviIzvestaj(){}

  izmeniPodatke(){
    console.log("USERNAME U FUNKCIJI:"+this.username);

    this.router.navigateByUrl('/izmena-korisnika/' + this.username);

  }
  izmeniPodatkeORAC(){
    this.router.navigateByUrl('/izmena-podataka-orac/' + this.username);

  }
  dodajFilijalu(){
    this.router.navigateByUrl('/dodaj-filijalu/' + this.username);
  }
  obrisiFilijalu(username:string,adresa:string, grad:string,drzava:string){
    this.service.ObrisiFilijalu(this.username,adresa,grad,drzava).subscribe(
      (res: any) => {      
        console.log("RADI");
        console.log(res);  
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }
  izmeniFilijale(id:string){
    this.router.navigateByUrl('/izmeni-filijalu/' + id);
  }
}
