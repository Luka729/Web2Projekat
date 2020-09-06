import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvioKompanijaService } from 'src/app/shared/avio-kompanija-service';

@Component({
  selector: 'app-izmena-podataka-ak',
  templateUrl: './izmena-podataka-ak.component.html',
  styleUrls: ['./izmena-podataka-ak.component.css']
})
export class IzmenaPodatakaAKComponent implements OnInit {
  username:string;
  load: number;

  constructor(private router:ActivatedRoute,public service:AvioKompanijaService) {
    this.load = 0;
    router.params.subscribe(params => {
      this.username = params['userNameProvera'];
    });
   }
  ngOnInit() {
    this.service.izmenaAKForm.reset();
    this.DobaviPodatkeKompanije();
  }
   
  DobaviPodatkeKompanije() :void{
    this.service.NalogAvioKompanije(this.username).subscribe(
      (res: any) => {      
        document.getElementById("nazivServisa").innerText  = res.naziv;
        document.getElementById("adresaAK").innerText  = res.adresa;
        document.getElementById("promoOpis").innerText = res.promoOpis;
       
      },
      err => {
        console.log("NE RADI DOBAVLJANJE RAC");
        console.log(err);
      }
    );
  }
                                        
  onSubmit() {
    this.load = 1
    console.log("Uslo u submit");
    this.service.izmenaAvioKompanije(this.username).subscribe(
      (res: any) => {      
        console.log("RADI");
        this.service.izmenaAKForm.reset();
        console.log(res); 
      },
      err => {
        console.log("NE RADI");

        console.log(err);
      }
    );
  }


}
