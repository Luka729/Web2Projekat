import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-prikaz-prijatelja',
  templateUrl: './prikaz-prijatelja.component.html',
  styleUrls: ['./prikaz-prijatelja.component.css']
})
export class PrikazPrijateljaComponent implements OnInit {
  lista: Array<any>;
  pomocnaLista: Array<any>;
  searchServicRaC: string;
  username: string;
  userID: any;
  poslatZahtev: number;
  listaZahteva: Array<any>;

  constructor(private router: Router, private route: ActivatedRoute, public service: UserService) {
    route.params.subscribe(params => {
      this.username = params['userNameProvera'];
      console.log("Prikaz Prijatelja konstruktor:" + params['userNameProvera']);
      this.poslatZahtev=1;
      this.ispisKorisnika(this.username);
      this.dobaviZahteve(this.username);
    });
  }

  ngOnInit(): void {

  }

  dodajPrijatelja(prijateljID: any) {
    this.service.dodajPrijatelja(this.username, prijateljID).subscribe(
      (res: any) => {
        this.poslatZahtev = 1;
        document.getElementById('labelaPoruka').innerHTML = "Zahtev poslat"
      },
      err => {
        console.log(err);
        console.log("Prijatelj nije dodat");
        this.poslatZahtev = 0;

      }
    );
  }

  ispisKorisnika(username: any) {
    this.service.ucitajKorisnika(username).subscribe(
      (res: any) => {
        this.lista = res;
        this.pomocnaLista = res;
        console.log(res);
        console.log("korisnici ucitani");
      },
      err => {
        console.log(err);
        console.log("korisnici nisu ucitani");

      }
    );

  }

  dobaviZahteve(username: string) {
    this.service.dobaviListuZahteva(username).subscribe(
      (res: any) => {
        this.listaZahteva = res;
        console.log(res);
        console.log("korisnici ucitani");
      },
      err => {
        console.log(err);
        console.log("korisnici nisu ucitani");

      }
    );
  }

  prihvatiPrijatelja(usernamePrijatelja: string, username: string) {
    username=this.username;
    this.service.prihvatiZahtev(usernamePrijatelja,username).subscribe(
      (res: any) => {
        console.log(res);
        console.log("prihvacen zahtev");
      },
      err => {
        console.log(err);
        console.log("zahtev nije prihvacen");

      }
    );

  }

  odbijPrijatelja(usernamePrijatelja: string,username: string) {
    username=this.username;
    this.service.odbijZahtev(usernamePrijatelja,username).subscribe(
      (res: any) => {
        console.log(res);
        console.log("odbijen zahtev");
      },
      err => {
        console.log(err);
        console.log("zahtev nije odbijen");

      }
    );
  }



  Search() {
    this.lista = this.lista.filter(res => {
      return res.brend.toLocaleLowerCase().match(this.searchServicRaC.toLocaleLowerCase());
    });

    if (this.searchServicRaC == "") {
      this.lista = this.pomocnaLista;
    }
  }

}
