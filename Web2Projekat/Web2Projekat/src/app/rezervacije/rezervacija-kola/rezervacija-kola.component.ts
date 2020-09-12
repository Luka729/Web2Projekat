import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentACarService } from 'src/app/shared/RentACar.service';

@Component({
  selector: 'app-rezervacija-kola',
  templateUrl: './rezervacija-kola.component.html',
  styleUrls: ['./rezervacija-kola.component.css']
})
export class RezervacijaKolaComponent implements OnInit {

  kolaID: string;
  userID: any;
  lista: any;
  constructor(private route:ActivatedRoute, private router: Router, public service:RentACarService) { 
    route.params.subscribe(params => {
      this.kolaID = params['kolaObjekat'];
      this.userID = params['userNameProvera'];
      console.log(" KOLA ID:"+this.kolaID);
      console.log("USER ID:" +this.userID);
      this.ispisAuta(this.kolaID);

    });
  }

  ispisAuta(ID:any){
    this.service.ucitajAuto(ID).subscribe(
      (res: any) => {   
        this.lista = res;
        console.log(this.lista);

        console.log("KOLA SA TIM ID UCITANA:"+ID);
      },
      err => {
        console.log(err);
        console.log("KOLA SA TIM ID NISU UCITANA:"+ID );

      }
    );
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.service.rezervisiAuto(this.kolaID,this.userID).subscribe(
      (res: any) => {         
        this.service.RezervacijaForm.reset();
        console.log("Kola su uspesno rezervisana");
      },
      err => {
        console.log(err);
        console.log("KOLA SA TIM ID NISU rezervisana:");

      }
    );
  }
}
