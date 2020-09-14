import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { element } from 'protractor';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-izaberi-sediste',
  templateUrl: './izaberi-sediste.component.html',
  styleUrls: ['./izaberi-sediste.component.css']
})
export class IzaberiSedisteComponent implements OnInit {

  letID: string;
  fly: any;
  listaSedista: any;
  listaOdabranihSedista: any;
  userID: string;
  listaPrijatelja: Array<any>;

  constructor(private route: ActivatedRoute, private router: Router,public service: AvioKompanijaService, public serviceUser: UserService) {
    route.params.subscribe(params => {
      this.letID = params['lett'];
      console.log("LET ID:" + this.letID);
      this.dobavkaLeta(this.letID);
     
    });
  }
ispisPrijatelja(userID:string){

    this.serviceUser.ucitajPrijateljeZaPozivanje(userID).subscribe(
      (res: any) => {
        this.listaPrijatelja = res;
        console.log(res);
        console.log("prijatelji ucitani");
      },
      err => {
        console.log(err);
        console.log("korisnici nisu ucitani");

      }
    );
  }
  dobavkaLeta(ID): void {
    this.service.dobaviLet(ID).subscribe(
      (res: any) => {
        this.fly = res;
        //console.log(this.fly)
      },
      err => {
        console.log(err);
      }
    );
  }

  dobavkaSedista(ID): void {
    this.service.dobaviSedista(ID).subscribe(
      (res: any) => {
        this.listaSedista = res;
        //console.log(this.listaSedista);
        this.listaSedista.sort(function (a: any, b: any) {

          //console.log(a.brojSedista-b.brojSedista);
          return a.brojSedista - b.brojSedista;

        })
        //console.log("listasedista:"+this.listaSedista)
      },
      err => {
        console.log(err);
      }
    );
  }

  RezervisiZaPrijatelja(): void {
    var odabraniIDevi = new Array<string>();
    var elementi = <HTMLElement[]><any>document.getElementsByName("ime");

    for (let i = 0; i < elementi.length; i++) {
      if ((elementi[i].children[0].children[0] as HTMLInputElement).type == "checkbox" &&
        (elementi[i].children[0].children[0] as HTMLInputElement).checked) {
        odabraniIDevi.push((elementi[i].children[0].children[0] as HTMLInputElement).id)
      }
    }
    //console.log(odabraniIDevi);


    this.listaOdabranihSedista = [];

    for (let i = 0; i < this.listaSedista.length; i++) {
      if (odabraniIDevi.indexOf(this.listaSedista[i].brojSedista.toString()) !== -1) {
        this.listaOdabranihSedista.push(this.listaSedista[i])
      }
    }
    //console.log(this.listaOdabranihSedista);

    //let token = localStorage.getItem('token');
    //const helper = new JwtHelperService();
    //var decodeToken = helper.decodeToken(token);

    console.log("aaaaaaa");
    console.log(this.listaOdabranihSedista);

    var tiketsIDs = "";
    for (let i = 0; i < this.listaOdabranihSedista.length; i++) {
      if (i < this.listaOdabranihSedista.length - 1) {
        tiketsIDs += this.listaOdabranihSedista[i].brojSedista + ",";
      } else {
        tiketsIDs += this.listaOdabranihSedista[i].brojSedista;
      }

      //console.log(tiketsIDs);

      this.service.rezervisiZaPrijatelja(this.letID, tiketsIDs).subscribe(
        (res: any) => {  
          this.dobavkaSedista(this.letID);

        },
        err => {
          console.log(err);
        }
      );
  
  
  
  
      if (this.listaOdabranihSedista.length == 0) {
        alert("Niste izabrali ni jedno sediste");
      }
      else {
        alert("Uspesno izabrana sedista")
      }
  

    }

  }

  Rezervisi(): void {

    var odabraniIDevi = new Array<string>();
    var elementi = <HTMLElement[]><any>document.getElementsByName("ime");

    for (let i = 0; i < elementi.length; i++) {
      if ((elementi[i].children[0].children[0] as HTMLInputElement).type == "checkbox" &&
        (elementi[i].children[0].children[0] as HTMLInputElement).checked) {
        odabraniIDevi.push((elementi[i].children[0].children[0] as HTMLInputElement).id)
      }
    }
    //console.log(odabraniIDevi);


    this.listaOdabranihSedista = [];

    for (let i = 0; i < this.listaSedista.length; i++) {
      if (odabraniIDevi.indexOf(this.listaSedista[i].brojSedista.toString()) !== -1) {
        this.listaOdabranihSedista.push(this.listaSedista[i])
      }
    }
    //console.log(this.listaOdabranihSedista);

    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    var decodeToken = helper.decodeToken(token);

    console.log("aaaaaaa");
    console.log(this.listaOdabranihSedista);

    var tiketsIDs = "";
    for (let i = 0; i < this.listaOdabranihSedista.length; i++) {
      if (i < this.listaOdabranihSedista.length - 1) {
        tiketsIDs += this.listaOdabranihSedista[i].brojSedista + ",";
      } else {
        tiketsIDs += this.listaOdabranihSedista[i].brojSedista;
      }

      //console.log(tiketsIDs);

    }

    this.service.rezervisi(this.letID, tiketsIDs, decodeToken.UserID).subscribe(
      (res: any) => {
        this.dobavkaSedista(this.letID);

      },
      err => {
        console.log(err);
      }
    );




    if (this.listaOdabranihSedista.length == 0) {
      alert("Niste izabrali ni jedno sediste");
    }
    else {
      alert("Uspesno izabrana sedista")
    }

  }

  ngOnInit(): void {
    this.dobavkaSedista(this.letID);
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    var decodeToken = helper.decodeToken(token);
    this.ispisPrijatelja(decodeToken.UserID);
  }

}
